jQuery(function($) {'use strict',
  //Preloader
  $(window).load(function(){
    $('.preloader').fadeOut('fast',function(){$(this).remove();});
    // $('.carousel-caption').addClass('animated fadeInDown');
    $('.labs').addClass('animated fadeInRight');
    // $('.logo-pieces .bottom-piece').addClass('animated fadeInRight');
    // $('.logo-pieces .top-piece').addClass('animated rollIn');
  });
  // Initial section height
  var slideHeight = $(window).height();
  // $('#home-carousel .item').css('height',slideHeight);

  // $(window).resize(function(){'use strict',
  //   $('#home-carousel .item').css('height',slideHeight);
  // });
  $('#main-home-section').css('height',slideHeight);
  $(window).resize(function(){'use strict',
    $('#main-home-section').css('height',slideHeight);
  });

  //Parallax Scrolling
  $(window).bind('load', function () {
    parallaxInit();
  });

  function parallaxInit() {

    $("#promo-one").parallax("50%", 0.3);
    $("#promo-two").parallax("50%", 0.3);
    $("#twitter").parallax("50%", 0.3);
    $("#testimonial").parallax("50%", 0.3);
    $("#contact-us").parallax("50%", 0.3);

  }

  parallaxInit();

  //Type effect
  $("#typewriter").typed({
    strings: [
      "Ruby on Rails",
      "Node.js",
      "Clojure",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "iOS",
      "Android",
      "ReactJS",
      "AngularJS",
      "jQuery",
      "Bootstrap",
      "RSpec",
      "Git",
      "Emacs",
      "Vim",
      "AWS"
    ],
    typeSpeed: 35,
    backDelay: 800,
    loop: true
  });

  // Navigation Scroll	
  // $(window).on('scroll', function(){
  //   if( $(window).scrollTop() > window.innerHeight){
  //     $('#navigation .navbar').addClass('navbar-fixed-top');
  //   } else {
  //     $('#navigation .navbar').removeClass('navbar-fixed-top');
  //   }
  // });

  $(window).scroll(function(event) {
    Scroll();
    var $overlay = $('#overlay');
    var winTop = $(window).scrollTop();
    var $values = $('#handcrafted h1');
    var valuesTop = $values.offset().top;
    var offsetRatio = Math.pow(1 - Math.abs(valuesTop - winTop) / valuesTop, 2);
    // if(offsetRatio < 0.7) $overlay.css('opacity', offsetRatio);
  });

  $('.navbar-collapse ul li a').click(function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top -10}, 1000);
    return false;
  });

  // User define function
  function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    $('.navbar-collapse').find('.scroll a').each(function(){
      contentTop.push( $( $(this).attr('href') ).offset().top);
      contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
      if ( winTop > contentTop[i] - rangeTop ){
        $('.navbar-collapse li.scroll')
          .removeClass('active')
          .eq(i).addClass('active');
      }
    })

  };

  // 

  //accordion
  $('#accordion-two .panel-default .panel-heading').on('click',function(){'use strict',
    $('.panel-heading').removeClass('active');
    $(this).addClass('active');
  });

  //Pretty Photo
  $("a[data-gallery^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

  // portfolio filter
  $(window).load(function(){'use strict',
    $portfolio_selectors = $('.portfolio-filter >li>a');
    if($portfolio_selectors!='undefined'){
      $portfolio = $('.portfolio-items');
      $portfolio.isotope({
        itemSelector : '.portfolio-item',
        layoutMode : 'fitRows'
      });

      $portfolio_selectors.on('click', function(){
        $portfolio_selectors.removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({ filter: selector });
        return false;
      });
    }
  });

  // Timer
  $('.timer').each(count);
  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }

  //smoothScroll
  smoothScroll.init();

  // Google Map Customization
  // (function(){
  //
  //   var map;
  //
  //   map = new GMaps({
  //     el: '#gmap',
  //     lat: 13.745546,
  //     lng: 100.5624,
  //     scrollwheel:false,
  //     zoom: 16,
  //     zoomControl : true,
  //     panControl : false,
  //     streetViewControl : false,
  //     mapTypeControl: false,
  //     overviewMapControl: false,
  //     clickable: false
  //   });
  //
  //   var image = '';
  //   map.addMarker({
  //     lat: 13.745546,
  //     lng: 100.5624,
  //     icon: image,
  //     animation: google.maps.Animation.DROP,
  //     verticalAlign: 'bottom',
  //     horizontalAlign: 'center',
  //     backgroundColor: '#d3cfcf',
  //   });
  //
  //
  //   var styles = [
  //
  //   {
  //     "featureType": "road",
  //     "stylers": [
  //     { "color": "#ffffff" }
  //     ]
  //   },{
  //     "featureType": "water",
  //     "stylers": [
  //     { "color": "#ffb0b2" }
  //     ]
  //   },{
  //     "featureType": "landscape",
  //     "stylers": [
  //     { "color": "#f5ecec" }
  //     ]
  //   },{
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     { "color": "#d3cfcf" }
  //     ]
  //   },{
  //     "featureType": "poi",
  //     "stylers": [
  //     { "color": "#f4c2c3" }
  //     ]
  //   },{
  //     "elementType": "labels.text",
  //     "stylers": [
  //     { "saturation": 1 },
  //     { "weight": 0.1 },
  //     { "color": "#000000" }
  //     ]
  //   }
  //
  //   ];
  //
  //   map.addStyle({
  //     styledMapName:"Styled Map",
  //     styles: styles,
  //     mapTypeId: "map_style"
  //   });
  //
  //   map.setStyle("map_style");
  // }());

  // Send message
  // $('#send-message').click(function(evt) {
  //   evt.preventDefault();
  //   var mailResult = $('#mail-result');
  //   mailResult.addClass('hidden');
  //   var name = $('#message-name').val();
  //   var email = $('#message-email').val();
  //   var subject = $('#message-subject').val();
  //   var message = $('#message-content').val();
  //
  //   Parse.initialize("oypIBNT5o3X6GzxsHq6YYFb8AwzUS54GpAjR5grJ", "njlddkeF48mz3XvD6smGS0mhjKbOLDjU8m5gUpFU");
  //
  //   var data = {
  //     name: name,
  //     email: email,
  //     subject: subject,
  //     message: message
  //   }
  //
  //   Parse.Cloud.run('sendEmail', data, {
  //     success: function(object) {
  //       mailResult.text("Thanks! We'll be in touch shortly.");
  //       mailResult.addClass('alert-succes');
  //       mailResult.removeClass('alert-danger');
  //       mailResult.removeClass('hidden');
  //     },
  //     error: function(object, error) {
  //       mailResult.text('There was an error. Please try again.');
  //       mailResult.removeClass('alert-succes');
  //       mailResult.addClass('alert-danger');
  //       mailResult.removeClass('hidden');
  //     }
  //   });
  // });

});
