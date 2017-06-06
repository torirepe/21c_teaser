$(document).ready(function(){
  bgSlider();
  mcSlider();
  blur();
});
$(window).load(function(){
  anchorScroll();
});

//bgSlider
function bgSlider() {
  $("#bgSlider").bxSlider({
    auto: true,
    mode: 'fade',
    pause: 2000,
    speed: 8000,
    infiniteLoop: true
  });
}

//mcSlider
function mcSlider() {
  $("#mcSlider").bxSlider({
    speed: 600,
    controls: false,
    pager: true,
    pagerCustom: "#mcPager",
    infiniteLoop: false
  });
}

///blur
function blur() {
  var bg       = $("#bg");
  var wind     = $(window);
  var triggerH = wind.innerHeight() / 2;
  var windTop  = wind.scrollTop();

  wind.scroll(function(){
    windTop = wind.scrollTop();
    if ( windTop >= triggerH ) {
      bg.addClass('blur');
    } else {
      bg.removeClass('blur');
    }
  });
}

//anchorScroll
function anchorScroll(){
  $('a[href^="#"]').on("click",function() {
    var counter = $("#global-header").innerHeight();
    var speed = 240;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top -0 - counter;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
};