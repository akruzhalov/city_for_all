<?php
require_once __DIR__.'/vendor/autoload.php';
$loader = new \Twig\Loader\FilesystemLoader(__DIR__.'/templates');
$twig = new \Twig\Environment($loader);
$a = 'styles/main_styles.css';
        echo $twig->render('base.html', array('a' => $a));
include 'visually_impaired_cookie.php';

echo $twig->render('taxi.html', ['current_url' => 'taxi.php', 'visually_impaired' => $visually_impaired]);