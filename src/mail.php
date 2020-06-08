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

$mail->CharSet = $config['CharSet'];                 // Кодировка обмена сообщениями с SMTP сервером

$mail->isSMTP();                                     // Set mailer to use SMTP
$mail->Host = $config['Host'];  					           // Host SMTP сервера: ip или доменное имя
$mail->SMTPAuth = $config['SMTPAuth'];               // Наличие авторизации на SMTP сервере
$mail->Username = $config['Username'];               // Имя пользователя на SMTP сервере
$mail->Password = $config['Password'];               // Пароль от учетной записи на SMTP сервере
$mail->SMTPSecure = $config['SMTPSecure'];           // Тип шифрования
$mail->Port = $config['Port'];                       // TCP port to connect to / этот порт может отличаться у других провайдеров


$mail->setFrom($config['Username']);                 // от кого будет уходить письмо? (Адресант почтового сообщения )
$mail->addAddress($config['Username_to']);           // Получатель письма (Адресат почтового сообщения)
//$mail->AddReplyTo($config['addreply']);            // Альтернативный адрес для ответа
$mail->isHTML(true);                           // Set email format to HTML                                // Set email format to HTML

$mail->Subject = 'Заказ такси';                      // Тема письма
$mail-> Body = 'ФИО: '.$fio. '<br/> Телефон: '  .$phone. '<br/>Дата рождения: ' .$from. '<br/>Относится к категории: ' .$select;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>
