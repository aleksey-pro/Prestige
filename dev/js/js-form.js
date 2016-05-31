// JavaScript Document

$(document).ready(function() {
// Форма обратной связи................................./

var regVr22 = "<div><img style='margin-bottom:-4px;' src='../img/load.gif' alt='Отправка...' width='16' height='16'><span style='font: 11px Verdana; color:#ffffff; margin-left:6px;'>Сообщение обрабатывается...</span></div><br />";

$("#send").click(function(){
        $("#loadBar").html(regVr22).show();
        var posName = $("#posName").val();
        var posEmail = $("#posEmail").val();
        var posText = $("#posText").val();
        $.ajax({
            type: "POST",
            url: "../send.php",
            data: {"posName": posName, "posEmail": posEmail, "posText": posText},
            cache: false,
            success: function(response){
        var messageResp = "<span style='font-family:'PT Sans', sans-serif; font-size: 6px!important; color: #ffffff; padding:2px; margin:2px; background-color:rgba(61, 61, 61, 0.2);'>Спасибо, <strong>";
        var resultStat = "!</strong> Ваше сообщение отправлено!</span>";
        var oll = (messageResp + posName + resultStat);
                if(response == 1){
                $("#loadBar").html(oll).fadeIn(3000);
                $("#posName").val("");
                $("#posEmail").val("");
                $("#posText").val("");
                } else {
        $("#loadBar").html(response).fadeIn(3000); }
                                        }
        });
        return false;
});
});
