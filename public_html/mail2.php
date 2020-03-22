<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$fio = $_POST['fio'];
$phone = $_POST['phone'];
$birthdate = $_POST['birthdate'];
$serial = $_POST['serial'];
$number = $_POST['number'];
$datapas = $_POST['datapas'];
$issuedby = $_POST['issuedby'];
$actualadress = $_POST['actualadress'];
$date = explode(',',$_POST['date']);
$min_date = min($date);
$max_date = max($date);
$regadress = $_POST['regadress'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'osapolina9@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'abumed00'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

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
$mail-> Body = 'ФИО: '.$fio. '<br/> Телефон: '  .$phone. '<br/>Паспорт серия номер: ' .$serial .$number. '<br/> Дата выдачи: ' .$datapas. '<br/> Кем выдан: ' .$issuedby.'<br/> Адрес регистрации: ' .$regadress. '<br/> Адрес фактического проживания: ' .$actualadress. '<br/> Дата и время: '.$min_date.' - '.$max_date;                                   
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>