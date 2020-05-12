<?php
include("mail_template.php");

$from = $_POST['from'];
$select = $_POST['select'];



//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail = new PHPMailer;
$mail-> Body = '<table style="border-collapse: collapse;" border="1"><tr><td> ФИО:</td><td>' .$fio. '</td></tr><tr><td>Телефон:</td><td>'  .$phone. '</td></tr><tr><td>Дата рождения:</td><td>' .$from. '</td></tr><tr><td>Относится к категории:</td><td>' .$select. '</td></tr></table>';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}

