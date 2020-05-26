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
$from = $_POST['from'];
$select = $_POST['select'];


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = $config['Host'];  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = $config['SMTPAuth'];                                // Enable SMTP authentication
$mail->Username = $config['Username'];  // Ваш логин от почты с которой будут отправляться письма
$mail->Password = $config['Password']; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = $config['SMTPSecure'];                           // Enable TLS encryption, `ssl` also accepted
$mail->Port = $config['Port'];// TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom($config['Username']); // от кого будет уходить письмо?
$mail->addAddress($config['Username']); // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ такси';
$mail-> Body = 'ФИО: '.$fio. '<br/> Телефон: '  .$phone. '<br/>Дата рождения: ' .$from. '<br/>Относится к категории: ' .$select;
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>

