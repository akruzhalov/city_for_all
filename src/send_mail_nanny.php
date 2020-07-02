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
$serial = $_POST['serial'];
$number = $_POST['number'];
$datapas = $_POST['datapas'];
$issuedby = $_POST['issuedby'];
$actualadress = $_POST['actualadress'];
$date = $_POST['date'];
$regadress = $_POST['regadress'];
$date_from = $_POST['date_from'];
$date_until = $_POST['date_until'];

$info=[$fio,$phone,$birthday,$serial,$number,$datapas,$issuedby,$actualadress,$regadress,$date_from,$date_until];
$info_html=["%fio%","%phone%","%birthday%","%serial%","%number%","%datapas%","%issuedby%","%actualadress%","%regadress%","%date_from%","%date_until%"];
$message = file_get_contents('mail_templates/nanny.html');
$subject = 'Заказ няни';

include 'common_mail.php';

?>