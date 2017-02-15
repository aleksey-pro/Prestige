// Форма обратной связи................................./

var inputName = document.querySelector('#posName');
inputName.onfocus = function(){
  if (this.value == 'Ваше имя') {
    this.value = '';
    this.style.color = '#ffffff';
  }    
};
inputName.onblur = function(){
  if (this.value == '') {
    this.value = 'Ваше имя';
    this.style.color = '#ffffff';
  }
};

var inputEmail = document.querySelector('#posEmail');
inputEmail.onfocus = function(){
  if (this.value == 'e-mail') {
    this.value = '';
    this.style.color = '#ffffff';
  } 
};
inputEmail.onblur = function() {
  if (this.value == '') {
    this.value = 'e-mail';
    this.style.color = '#ffffff';
  }
};

var inputText = document.querySelector('#posText');
inputText.onfocus = function() {
  if (this.value == 'Ваше сообщение') {
    this.value = '';
    this.style.color = '#ffffff';
  }
};
inputText. onblur = function() {
  if (this.value == '') {
    this.value = 'Ваше сообщение';
    this.style.color = '#ffffff';
  }
};

$(document).ready(function() {

var regVr22 = "<div><img class='popMsg'><span>Сообщение обрабатывается...</span></div>";

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
