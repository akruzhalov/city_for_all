<?php
require_once __DIR__ . '/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use Symfony\Component\Yaml\Parser;
$loader = new \Twig\Loader\FilesystemLoader(__DIR__.'/templates');
$twig = new \Twig\Environment($loader);

$mail = new PHPMailer;
$yaml = new Parser();

$config = $yaml->parse( file_get_contents('config.yml') )['smtp'];

$fio = $_POST['fio'];
$phone = $_POST['phone'];
$birthday = $_POST['birthday'];
$address = $_POST['address'];
$category = $_POST['category'];

$info=[$fio,$phone,$birthday,$category];
$info_html=["%fio%","%phone%","%birthday%","%category%"];
$message = file_get_contents('mail_templates/taxi.html');
$subject = 'Заказ такси';

include 'common_mail.php';

?>

