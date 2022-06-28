$(function() {

  $(document).ready(function() {

    var scrollOffset = $('#header2').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('#header2').addClass('scroll-fixed');
      }
      else {
        $('.scroll-menu').removeClass('scroll-fixed');
      }
    });
  });
});
