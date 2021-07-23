/*  ---------------------------------------------------
    Author: Josh
    Author URI: https://twitter.com/HodJosias
---------------------------------------------------------  */

(function ($) {

    new WOW().init();

    // All animations will take exactly 500ms
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
    });
    
})(jQuery);

jQuery(document).ready(function ($) {

  $('.lazy').Lazy({
      // your configuration goes here
      effect: 'fadeIn',
      enableThrottle: true,
        throttle: 250
  });

  // $('section h2').on('inview', function(event, isInView) {
  //   if (isInView) {$(this).addClass('visible');} else {$(this).removeClass('');}});

  $('#faves').on('inview', function(event, isInView) {
    if (isInView) {
      $('#nav li:nth-child(2)').addClass('active');
    } else {
      $('#nav li:nth-child(2)').removeClass('active');
    }
    });


    $('#overview').on('inview', function(event, isInView) {
      if (isInView) {
        $('#nav li > a[href="#overview"]').parent().addClass('active');
      } else {
        $('#nav li > a[href="#overview"]').parent().removeClass('active');
      }
    });

    $('#work').on('inview', function(event, isInView) {
      if (isInView) {
        $('#nav li > a[href="#work"]').parent().addClass('active');
      } else {
        $('#nav li > a[href="#work"]').parent().removeClass('active');
      }
    });

    $('#illustration').on('inview', function(event, isInView) {
      if (isInView) {
        $('#nav li > a[href="#illustration"]').parent().addClass('active');
      } else {
        $('#nav li > a[href="#illustration"]').parent().removeClass('active');
      }
    });

    $('#help').on('inview', function(event, isInView) {
      if (isInView) {
        $('#nav li > a[href="#help"]').parent().addClass('active');
      } else {
        $('#nav li > a[href="#help"]').parent().removeClass('active');
      }
    });
});