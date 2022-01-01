var scroller = {};
var topSpace = $('#topHeading').height();
const scrollWidth = $('.box-wrap').width();
console.log($(window).width());

scroller.e = document.getElementById("scroll");
$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();

  if (scroll > 785 && ((765 - scroll) > ($(window).width() - $(".box-wrap").width()))) {


    var scrollPos = scroll - 770;
    $('#fixedSec').css({
      'top': scrollPos + "px"
    })
    $('.box-wrap').css('transform', 'translateX(' + (755 - scroll) + 'px)');



  }


});

