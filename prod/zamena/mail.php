<?
if (isset($_POST['u_name'])&& isset($_POST['u_phone']))
{
$name = $_POST['u_name'];
$phone = $_POST['u_phone'];
$addr = $_POST['u_addr'];
$square = $_POST['u_square'];
$message = $_POST['messge'];
$mail = $_POST['u_mail'];

$to = 'prestigefacade@yandex.ru';
$subject = 'Новый заказ';
$msg = "Имя отправителя: $name \r\n Контактный телефон: $phone \r\n Адрес объекта: $addr \r\n Е-маил отправителя: $mail \r\n Площадь к помывке: $square \r\n Комментарий: $message";
$headers = "MIME-Ver: 1.0\r\n";
$headers .= "Content-type: text\plain; charset=utf-8\r\n";
mail($to, $subject, $msg, $headers);
//print_r($_POST);
echo "<script>alert(\"\u0421\u043f\u0430\u0441\u0438\u0431\u043e\u0021 \u0424\u043e\u0440\u043c\u0430 \u0437\u0430\u044f\u0432\u043a\u0438 \u0432\u044b\u0441\u043b\u0430\u043d\u0430 \u043d\u0430\u043c \u043d\u0430 \u043f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0440\u0435\u0441\");</script>";//Спасибо! Форма заявки выслана нам на почтовый адрес https://www.branah.com/unicode-converter
header('Refresh: 1; URL=http://www.cleaning.prestigefacade.ru/');
}
else {
echo "<script>alert(\"\u0418\u043c\u044f \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0021\");</script>";//Имя и телефон должны быть заполнены!
header('Refresh: 1; URL=http://www.cleaning.prestigefacade.ru/');
}
?>