<?php
require_once __DIR__ . '/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use Symfony\Component\Yaml\Parser;

$mail = new PHPMailer;

$yaml = new Parser();


$config = $yaml->parse( file_get_contents('config.yml') )['smtp'];
//var_dump($config);


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


//$mail->SMTPDebug = 3;                              // Enable verbose debug output

$mail->CharSet = $config['CharSet'];                 // Кодировка обмена сообщениями с SMTP сервером

$mail->isSMTP();                                     // Set mailer to use SMTP
$mail->Host = $config['Host'];  					 // Host SMTP сервера: ip или доменное имя
$mail->SMTPAuth = $config['SMTPAuth'];               // Наличие авторизации на SMTP сервере
$mail->Username = $config['Username'];               // Имя пользователя на SMTP сервере
$mail->Password = $config['Password'];               // Пароль от учетной записи на SMTP сервере
$mail->SMTPSecure = $config['SMTPSecure'];           // Тип шифрования
$mail->Port = $config['Port'];                       // TCP port to connect to / этот порт может отличаться у других провайдеров


$mail->setFrom($config['Username']);                 // от кого будет уходить письмо? (Адресант почтового сообщения )
$mail->addAddress($config['Username_to']);           // Получатель письма (Адресат почтового сообщения)
//$mail->AddReplyTo($config['addreply']);            // Альтернативный адрес для ответа
$mail->isHTML(true);                           // Set email format to HTML

$mail->Subject = 'Заказ няни';                       // Тема письма
$mail-> Body = 'ФИО: '.$fio. '<br/> Телефон: '  .$phone. '<br/>Паспорт серия номер: ' .$serial .$number. '<br/> Дата выдачи: ' .$datapas. '<br/> Кем выдан: ' .$issuedby.'<br/> Адрес регистрации: ' .$regadress. '<br/> Адрес фактического проживания: ' .$actualadress. '<br/> Дата и время: '.$date;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>