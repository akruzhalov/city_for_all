<?php
require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/mailer.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\Yaml\Parser;
use Silex\Application;

$app = new Application();
$loader = new \Twig\Loader\FilesystemLoader(__DIR__.'/templates');
$app['twig'] = new \Twig\Environment($loader);

$config_parser = new Parser;
$app['mail_config'] = $config_parser->parse(file_get_contents('config.yml'))['smtp'];

$app['nanny_params'] = ['fio', 'phone', 'birthday', 'serial', 'number', 'datapas', 'issuedby', 'actualadress', 'data', 'regadress', 'date_from', 'date_until'];
$app['taxi_params'] = ['fio', 'phone', 'birthday', 'category'];

$app->before(function (Request $request, Application $app) {
    $app['visually_impaired'] = 0;
    if ($request->query->get('for_visually_impaired') == 'true') {
        $app['visually_impaired'] = 1;
    }
    if ($request->cookies->has("ForVisuallyImpaired") && $request->query->get('for_visually_impaired') != 'false') {
        $app['visually_impaired'] = 1;
    }
}, Application::EARLY_EVENT);

$app->after(function (Request $request, Response $response, Application $app) {
    if ($app['visually_impaired'] == 1 && !$request->cookies->has("ForVisuallyImpaired")) {
        $cookie = new Cookie("ForVisuallyImpaired", 'true');
        $response->headers->setCookie($cookie);
    } else if ($app['visually_impaired'] == 0 && $request->cookies->has("ForVisuallyImpaired")) {
        $response->headers->clearCookie('ForVisuallyImpaired');
    }
});

$app->get('/', function (Request $request, Application $app) {
    return $app['twig']->render('index.html', ['current_url' => '/', 'visually_impaired' => $app['visually_impaired']]);
});

$app->get('/nanny', function (Request $request, Application $app) {
    return $app['twig']->render('nanny.html', ['current_url' => '/nanny', 'visually_impaired' => $app['visually_impaired']]);
});

$app->get('/taxi', function (Request $request, Application $app) {
    return $app['twig']->render('taxi.html', ['current_url' => '/taxi', 'visually_impaired' => $app['visually_impaired']]);
});

$app->post('/send_mail/{mail_type}', function (Request $request, Application $app, $mail_type) {
    if ($mail_type == 'nanny') {
        $params = $app['nanny_params'];
        $subject = 'Заказ няни';
        $mail_template_filename = 'mail_templates/nanny.html';
    } else {
        $params = $app['taxi_params'];
        $subject = 'Заказ такси';
        $mail_template_filename = 'mail_templates/taxi.html';
    }
    $params_templates = array_map(function ($name) { return '%' . $name . '%'; }, $params);
    $params_values = array_map(function ($name) use ($request) { return $request->request->get($name); }, $params);
    $mailer = new Mailer($subject, $params_templates, $params_values, $app['mail_config'], $mail_template_filename);
    if(!$mailer->send()) {
        return $app['twig']->render('send_mail_error.html', ['current_url' => '/', 'visually_impaired' => $app['visually_impaired']]);
    } else {
        return $app['twig']->render('thank_you.html', ['current_url' => '/', 'visually_impaired' => $app['visually_impaired']]);
    }
});


$app->run();