<?php
require_once __DIR__ . '/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer;

$mail->CharSet = 'utf-8';

$fio = $_POST['fio'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$birthday = $_POST['birthday'];
$select = $_POST['select'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$message = file_get_contents('mail_templates/mail.html');

// Replace the % with the actual information
$message = str_replace('%fio%', $fio, $message);
$message = str_replace('%phone%', $phone, $message);
$message = str_replace('%address%', $address, $message);
$message = str_replace('%birthday%', $birthday, $message);
$message = str_replace('%select%', $select, $message);

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'cityforall@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'abumed00'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('cityforall@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('cityforall@mail.ru');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ такси';                      // Тема письма
$mail->MsgHTML($message);
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>

