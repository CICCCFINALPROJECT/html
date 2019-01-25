// nav_toggle
$(function(){
    $('#nav_toggle').click(function(){
                $("header").toggleClass('open');
        $("nav").fadeToggle(500);
            });

});
// smooth scroll
$(function(){
$('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});
});

$(function(){
    $(window).scroll(function() {
      var pos = $(window).scrollTop();
      if (700 < pos) {
        $('header').addClass('bg-header');
      } else if(300 < pos) {
        $('header').addClass('bg-header');
      }else {
        $('header').removeClass('bg-header');
      }
    });
  });