<?php
require_once __DIR__.'/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

class Mailer {

  public $subject;
  public $params_templates;
  public $params_values;
  public $config;
  public $mail_template_filename;


  public function __construct($subject, $params_templates, $params_values, $config, $mail_template_filename) {
    $this->subject = $subject;
    $this->params_templates = $params_templates;
    $this->params_values = $params_values;
    $this->config = $config;
    $this->mail_template_filename = $mail_template_filename;
    $this->InitMail();
  }

  public function send() {
      return $this->mail->send();
  }

  private function InitMail() {
      $this->mail = new PHPMailer();
      $this->mail->isSMTP();                                           // Set mailer to use SMTP
      $this->mail->Host = $this->config['Host'];  					   // Host SMTP сервера: ip или доменное имя
      $this->mail->SMTPAuth = $this->config['SMTPAuth'];               // Наличие авторизации на SMTP сервере
      $this->mail->Username = $this->config['EmailFrom'];              // Имя пользователя на SMTP сервере
      $this->mail->Password = $this->config['Password'];               // Пароль от учетной записи на SMTP сервере
      $this->mail->SMTPSecure = $this->config['SMTPSecure'];           // Тип шифрования
      $this->mail->Port = $this->config['Port'];                       // TCP port to connect to / этот порт может отличаться у других провайдеров
      $this->mail->CharSet = $this->config['CharSet'];                 // Кодировка обмена сообщениями с SMTP сервером  
      $this->mail->setFrom($this->config['EmailFrom']);                // от кого будет уходить письмо? (Адресант почтового сообщения )
      $this->mail->addAddress($this->config['EmailTo']);               // Получатель письма (Адресат почтового сообщения)
      //$this->mail->AddReplyTo($this->config['addreply']);            // Альтернативный адрес для ответа
      $this->mail->isHTML(true);                                       // Set email format to HTML

      $this->mail->Subject = $this->subject;                           // Тема письма
      $this->mail->MsgHTML($this->BuildMailBody());
      $this->mail->AltBody = '';
  }

  private function BuildMailBody() {
      $template = file_get_contents($this->mail_template_filename);
      $body = str_replace($this->params_templates, $this->params_values, $template);
      return $body;
  }

}