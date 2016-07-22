<?
$name = $_POST['u_name'];
$mail = $_POST['u_mail'];
$message = $_POST['messge'];
$icq = $_POST['u_icq'];
$skype = $_POST['u_skype'];
$do = $_POST['u_do'];
$ot = $_POST['u_ot'];
$to = 'anxieter@yandex.ru';
$subject = 'Новый заказ';
$msg = "Имя отправителя: $name. \r\n Е-маил отправителя: $mail. \r\n Ася: $icq. \r\n Скайп: $skype. \r\n Бюджет: от: $ot. \r\n До $do. \r\n Комментарий: $message";
$header = "MIME-Ver: 1.0\r\n";
$header .= "Content-type: text\html; charset=utf-8\r\n";
$header .= "From lolo <anxieter@yandex.ru>";
mail($to,$subject,$msg,$header) or print "Не могу отправить сообщение!";
// echo '<strong>Спасибо, ваш заказ принят на обработку.<br /><a href="index.html">Перейти на главную</a></strong>'
echo "<script>alert(\"Спасибо! Форма заявки выслана нам на почтовый адрес\");</script>";
header('Refresh: 1; URL=http://www.cleaning.prestigefacade.ru/');
?>