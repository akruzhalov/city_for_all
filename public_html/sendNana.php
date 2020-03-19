<?php

if(!isset($_POST) || empty($_POST)){
	echo 'Data form is empty';
	exit();
}

$db = new mysqli('localhost', 'root', '', 'city');
if($db->connect_error) echo 'Connection database is bad';

$selectedDate = $_POST['date'];
$recordExist = $db->query("SELECT id FROM records WHERE records.date = '{$selectedDate}'");

if($recordExist && $recordExist->num_rows){
	echo 'Кто-то уже записался';
	exit();
};

$currentDate = date('Y-m-d h:i:s');
$date = $_POST['date'];
$fio = trim(htmlspecialchars($_POST['fio']));
$phone = trim(htmlspecialchars($_POST['phone']));

$result = $db->query("INSERT INTO records (`name`, `phone`, `date`, `created_at`) VALUES ('$fio', '$phone', '$date', '$currentDate')");

if(!$result){
	echo 'Ошибка записи';
	exit();
};

echo 'Вы успешно записаны';

?>

