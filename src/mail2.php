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
$date = $_POST['date'];
$regadress = $_POST['regadress'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

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

$mail->Subject = 'Заказ няни';
$mail-> Body = '<table style="border-collapse: collapse;" border="1"><tr><td> ФИО:</td><td>' .$fio. '</td></tr><tr><td>Телефон:</td><td>'  .$phone. '</td></tr><tr><td>Паспорт серия номер:</td><td>' .$serial .$number. '</td><tr/><tr><td>Дата выдачи:</td><td>' .$datapas. '</td></tr><tr><td>Кем выдан:</td><td>' .$issuedby.'</td></tr><tr><td>Адрес регистрации:</td><td>' .$regadress. '</td></tr><tr><td>Адрес фактического проживания:</td><td>' .$actualadress. '</td></tr><tr><td>Дата и время:</td><td>' .$date. '</td</tr></table>';
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>
