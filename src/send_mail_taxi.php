<?php
require_once __DIR__ . '/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use Symfony\Component\Yaml\Parser;

$mail = new PHPMailer;
$yaml = new Parser();

$config = $yaml->parse( file_get_contents('config.yml') )['smtp'];

$fio = $_POST['fio'];
$phone = $_POST['phone'];
$birthday = $_POST['birthday'];
$address = $_POST['address'];
$select = $_POST['select'];

$info=[$fio,$phone,$birthday,$select];
$info_html=["%fio%","%phone%","%birthday%","%select%"];
$message = file_get_contents('mail_templates/taxi.html');
$subject = 'Заказ такси';

include 'common_mail.php';

?>

