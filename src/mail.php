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

$info=[$fio,$phone,$birthday,$address,$select];
$info_html=["%fio%","%phone%","%address%","%birthday%","%select%"];

$mail->CharSet = $config['CharSet'];                 // Кодировка обмена сообщениями с SMTP сервером


$message = file_get_contents('mail_templates/mail.html');

include 'mail_templates/common_mail.php';

$mail->Subject = 'Заказ такси';                      // Тема письма
$mail->MsgHTML($message);
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>

