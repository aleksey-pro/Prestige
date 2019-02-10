
$('.menu_button').click(function(){
    var blockToToggle = $(this).closest('#container');
    blockToToggle.toggleClass('container--open');
});
