$(document).ready(function(){$("a#go").click(function(o){o.preventDefault(),$("#overlay").fadeIn(400,function(){$("#modal_form").css("display","block").animate({opacity:1,top:"40%"},800)})}),$("#modal_close, #overlay").click(function(){$("#modal_form").animate({opacity:0,top:"15%"},800,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})});
//# sourceMappingURL=modal.js.map
