<?php
// Replace the % with the actual information
$message = str_replace($info_html, $info, $message);

$mail->isSMTP();                                     // Set mailer to use SMTP
$mail->Host = $config['Host'];  					 // Host SMTP сервера: ip или доменное имя
$mail->SMTPAuth = $config['SMTPAuth'];               // Наличие авторизации на SMTP сервере
$mail->Username = $config['EmailFrom'];              // Имя пользователя на SMTP сервере
$mail->Password = $config['Password'];               // Пароль от учетной записи на SMTP сервере
$mail->SMTPSecure = $config['SMTPSecure'];           // Тип шифрования
$mail->Port = $config['Port'];                       // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->CharSet = $config['CharSet'];                 // Кодировка обмена сообщениями с SMTP сервером


$mail->setFrom($config['EmailFrom']);                // от кого будет уходить письмо? (Адресант почтового сообщения )
$mail->addAddress($config['EmailTo']);               // Получатель письма (Адресат почтового сообщения)
//$mail->AddReplyTo($config['addreply']);            // Альтернативный адрес для ответа
$mail->isHTML(true);                                 // Set email format to HTML

$mail->Subject = $subject;                       // Тема письма
$mail->MsgHTML($message);
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error: ' . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}