<?php
require_once __DIR__ . '/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use Symfony\Component\Yaml\Parser;


$yaml = new Parser();


$mail = $yaml->parse( file_get_contents('config.yml') );
$mail = new PHPMailer;
//var_dump($mail);


$fio = $_POST['fio'];
$phone = $_POST['phone'];
$birthdate = $_POST['birthdate'];
$serial = $_POST['serial'];
$number = $_POST['number'];
$datapas = $_POST['datapas'];
$issuedby = $_POST['issuedby'];
$actualadress = $_POST['actualadress'];
$date = $_POST['date'];
$regadress = $_POST['regadress'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output


$mail->setFrom('osapolina9@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('osapolina9@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ няни';
$mail-> Body = 'ФИО: '.$fio. '<br/> Телефон: '  .$phone. '<br/>Паспорт серия номер: ' .$serial .$number. '<br/> Дата выдачи: ' .$datapas. '<br/> Кем выдан: ' .$issuedby.'<br/> Адрес регистрации: ' .$regadress. '<br/> Адрес фактического проживания: ' .$actualadress. '<br/> Дата и время: '.$date;
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>