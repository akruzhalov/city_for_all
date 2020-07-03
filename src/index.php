<?php
require_once __DIR__.'/vendor/autoload.php';
$loader = new \Twig\Loader\FilesystemLoader(__DIR__.'/templates');
$twig = new \Twig\Environment($loader);

include 'visually_impaired_cookie.php';

echo $twig->render('index.html', ['current_url' => 'index.php', 'visually_impaired' => $visually_impaired]);