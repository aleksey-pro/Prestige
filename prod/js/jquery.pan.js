jQuery.fn.extend({pan:function(){function e(){var e=$(".panWrapper img.i"),t=$(".panWrapper"),n=parseInt(e.css("width")),a=parseInt(e.css("height")),s=(parseInt(e.css("left")),parseInt(e.css("top")),0-(n-$(t).width())),r=0-(a-$(t).height()),i=parseInt(s*parseInt(event.pageX)/parseInt($(t).width())),c=parseInt(r*parseInt(event.pageY)/parseInt($(t).height()));parseInt($(t).width())>n&&parseInt($(t).height())>a?(e.css("left",(parseInt($(t).width())-n)/2),e.css("top",(parseInt($(t).height())-a)/2)):parseInt($(t).width())>n?(e.css("left",(parseInt($(t).width())-n)/2),e.css("top",c)):parseInt($(t).height())>a?(e.css("left",i),e.css("top",(parseInt($(t).height())-a)/2)):(e.css("left",i),e.css("top",c))}var t=document.createElement("div");$(t).addClass("panWrapper");var n=document.createElement("img");$(n).addClass("i").css("position","absolute");var a=document.createElement("a");$(a).addClass("controls in"),$(t).append(a);var s=document.createElement("a");$(s).addClass("controls out"),$(t).append(s);var r=document.createElement("a");$(r).addClass("controls close"),$(t).append(r),$(t).append(n),$("body").append(t),$(this).click(function(t){var n=$(this),a=n.attr("data-big");return $(".panWrapper").show(),$(".panWrapper img.i").css("width","auto").attr("src",a).load(function(){e()}),!1}),$(a).click(function(t){var n=$(".panWrapper img.i");n.css("width",parseInt(1.2*parseInt(n.css("width")))),e()}),$(s).click(function(t){var n=$(".panWrapper img.i");n.css("width",parseInt(parseInt(n.css("width"))/1.2)+1),e()}),$(r).click(function(e){$(".panWrapper").fadeOut("slow")}),$(t).mousemove(function(t){e()}),$("body").keydown(function(e){27==e.keyCode&&$(r).click()}),$(t).mousewheel(function(t){t.deltaY>0?$(s).click():$(a).click(),e()})}}),function(){function e(e,s,r,i){e[t](a+s,"wheel"==n?r:function(e){!e&&(e=window.event);var t={originalEvent:e,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==e.type?0:1,deltaX:0,delatZ:0,preventDefault:function(){e.preventDefault?e.preventDefault():e.returnValue=!1}};return"mousewheel"==n?(t.deltaY=-.025*e.wheelDelta,e.wheelDeltaX&&(t.deltaX=-.025*e.wheelDeltaX)):t.deltaY=e.detail,r(t)},i||!1)}var t,n,a="";window.addEventListener?t="addEventListener":(t="attachEvent",a="on"),void 0!==document.onmousewheel&&(n="mousewheel");try{WheelEvent("wheel"),n="wheel"}catch(s){}n||(n="DOMMouseScroll"),window.addWheelListener=function(t,a,s){e(t,n,a,s),"DOMMouseScroll"==n&&e(t,"MozMousePixelScroll",a,s)},$.fn.mousewheel=function(e){return this.each(function(){window.addWheelListener(this,e,!0)})}}(jQuery);
//# sourceMappingURL=jquery.pan.js.map
