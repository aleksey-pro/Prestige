(function() {
  var wheight = $(window).height();
  if (window.matchMedia("(min-width: 768px)").matches) {
    $('.fullheight').css('height', wheight);
    $(window).resize(function(){
      wheight = $(window).height();
      $('.fullheight').css('height', wheight);
    })
  } else {$('.fullheight').css('height', 'height');}
})();