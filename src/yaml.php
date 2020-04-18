<!-- Пример использования Symfony\Component\Yaml\Parser -->
<?php
require_once __DIR__ . '/vendor/autoload.php';
use Symfony\Component\Yaml\Parser;

$yaml = new Parser();

$value = $yaml->parse( file_get_contents('config.yml') );

var_dump($value);
var_dump($value["smtp"]["host"]);
?>

