<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$text = htmlspecialchars($text);
$fio = urldecode($fio);
$email = urldecode($email);
$phone = urldecode($phone);
$text = urldecode($text);
$fio = trim($fio);
$email = trim($email);
$phone = trim($phone);
$text = trim($text);
echo $fio;
echo "<br>";
echo $email;
echo "<br>";
echo $phone;
echo "<br>";
echo $text;
echo "<br>";
if (mail("svd2000@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: info@webriz.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>