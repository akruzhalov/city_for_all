  <?php
  include("mail_template.php");


  $birthdate = $_POST['birthdate'];
  $serial = $_POST['serial'];
  $number = $_POST['number'];
  $datapas = $_POST['datapas'];
  $issuedby = $_POST['issuedby'];
  $actualadress = $_POST['actualadress'];
  $date = $_POST['date'];
  $regadress = $_POST['regadress'];

$mail-> Body = '<table style="border-collapse: collapse;" border="1"><tr><td> ФИО:</td><td>' .$fio. '</td></tr><tr><td>Телефон:</td><td>'  .$phone. '</td></tr><tr><td>Паспорт серия номер:</td><td>' .$serial .$number. '</td><tr/><tr><td>Дата выдачи:</td><td>' .$datapas. '</td></tr><tr><td>Кем выдан:</td><td>' .$issuedby.'</td></tr><tr><td>Адрес регистрации:</td><td>' .$regadress. '</td></tr><tr><td>Адрес фактического проживания:</td><td>' .$actualadress. '</td></tr><tr><td>Дата и время:</td><td>' .$date. '</td</tr></table>';
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}

