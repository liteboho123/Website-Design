$(document).ready(function(){
  // fitText
  $('.text-fill').fitText('.35');
  $('em.text-fill').fitText('.45');
  $('.slide-three em.text-fill').fitText('.7');
  $('.slide-five em.text-fill').fitText('.75');
  $('.slide-six em.text-fill').fitText('.7');
  $('.slide-seven em.text-fill').fitText('.45');
  $('.slide-eight .text-fill').fitText('.85');
  $('h2.fittext').fitText('.85');
  $('.brand-title').fitText('.33', {maxFontSize: '170px'});

  // fitvid
  if($('.fit').length > 0) {
    $('.fit').fitVids();
  }

  // make sure all headings stay centered
  var slideHeading = $('.slide-heading').not('.slide-one .slide-heading');
  $(slideHeading).flexVerticalCenter();


  // Listen for orientation changes
  // window.addEventListener("orientationchange", function() {
  //   $('.text-fill').fitText('1');
  //   $('em.text-fill').fitText('1');
  //   $('.slide-three em.text-fill').fitText('1');
  //   $('.slide-five em.text-fill').fitText('1');
  //   $('.slide-six em.text-fill').fitText('1');
  //   $('.slide-seven em.text-fill').fitText('1');
  //   $('.slide-eight .text-fill').fitText('1');
  //   $(slideHeading).flexVerticalCenter();
  // }, false);


  // global vars
  var body = $('body');
  
  // mobile device check
  var isDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  
  // check if is device, add body class appropriately
  if(!isDevice) {
    $(body).addClass('desktop');
  } else {
    $(body).removeClass('mobile');
  }

  var isDesktop = function() {
    if($(body).hasClass('desktop')) {
      return true;
    } else {
      return false;
    }
  };
  
  if(true) {
    $('.curtains').curtain({
      scrollSpeed: 400
    });
  } else {
    // set slide height and width
    $('ol.curtains > li').removeClass('cover').addClass('slide').addClass('mobile-panel');
  }
  
  // sharing interaction
  var socialTrigger = $('.social-trigger');
    $(socialTrigger).on('click', function(e){
    $(this).parent().toggleClass('active');
    e.preventDefault();
  });
  
});


// sticky nav on join-us page
if($('#content-navigation').length > 0) {
    $('.stickem-container').stickem({start: 100});
}

// sticky navigation link smooth scrolling
$('#content-navigation a').on('click', function(e){
  var $anchor = $(this).attr("href");
  var $hrefStart = $anchor.substr(0, 1);

      if ( $hrefStart == "#" ) {
          $('html,body').animate({
              scrollTop: $($anchor).offset().top - 25
          });
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
          e.preventDefault(); 
      } else {
          window.location.href = $anchor;
      }
});


// device-navigation interaction
var deviceNavContainer = $('#device-navigation');
var deviceNavTrigger = $('.mobile-trigger');
var deviceNav = $('ul.device-nav');

$(deviceNavTrigger).on('click', function(){
  $(deviceNavContainer).toggleClass('is-hidden').toggleClass('is-active');
  $(deviceNav).toggle();
});

$(deviceNavContainer).find('a').not('.mobile-trigger').on('click', function(e){
  var $anchor = $(this).attr("href");
  var $hrefStart = $anchor.substr(0, 1);

  if ( $hrefStart == "#" ) {
    $(deviceNav).hide().parent().removeClass('is-active').addClass('is-hidden');
    $('html,body').animate({
        scrollTop: $($anchor).offset().top - 20
    });
    e.preventDefault(); 
  } else {
      window.location.href = $anchor;
  }
});


$('.next-slide-btn').on('click', function(e){
  var $anchor = $(this).attr("href");
  var $hrefStart = $anchor.substr(0, 1);

  if ( $hrefStart == "#" ) {
    $('html,body').animate({
        scrollTop: $(window).height() + 1
    });
    e.preventDefault();
  } else {
      window.location.href = $anchor;
  }
});


// navigation tracking
$(window).scroll(function(){
    if($('.stickem').length > 0) {
      navigationTracking();
    }
  });
  
  function navigationTracking() {
    var whoWeAre = $('#who-we-are').offset().top;
    var howItWorks = $('#how-it-works').offset().top;
    var speakers = $('#speakers').offset().top;
    var schedule = $('#schedule').offset().top;
    var signUpNow = $('#sign-up-now').offset().top;
    var staff = $('#staff').offset().top;
    var windowScroll = $(window).scrollTop();
    
    if(windowScroll < whoWeAre) {
      $('#content-navigation > nav > a').removeClass('active');
      $('#content-navigation > nav > a:nth-child(1)').addClass('active');
    }

    if(windowScroll >= whoWeAre - 80 && windowScroll < howItWorks ) {
      $('#content-navigation > nav > a').removeClass('active');
      $('#content-navigation > nav > a:nth-child(2)').addClass('active');
    }
    if (windowScroll > howItWorks - 80 && windowScroll < speakers) {
      $('#content-navigation > nav > a').removeClass('active');
      $('#content-navigation > nav > a:nth-child(3)').addClass('active');
    }
    if (windowScroll > speakers - 80 && windowScroll < schedule) {
      $('#content-navigation > nav > a').removeClass('active');
      $('#content-navigation > nav > a:nth-child(4)').addClass('active');
    }
    if (windowScroll > schedule - 80 && windowScroll < staff) {
      $('#content-navigation > nav > a').removeClass('active');
      $('#content-navigation > nav > a:nth-child(5)').addClass('active');
    }
    if (windowScroll > staff - 80 && windowScroll < signUpNow) {
      $('#content-navigation > nav > a').removeClass('active');
      $('#content-navigation > nav > a:nth-child(6)').addClass('active');
    }
    if (windowScroll > signUpNow - 80) {
      $('#content-navigation > nav > a').removeClass('active');
      $('#content-navigation > nav > a:nth-child(7)').addClass('active');
    }

    if (windowScroll > signUpNow + 150) {
      $('#content-navigation > nav > a').removeClass('active');
      $('#content-navigation > nav > a:nth-child(8)').addClass('active');
    }
  }





(function(e){var t=e.document;if(!location.hash&&e.addEventListener){window.scrollTo(0,1);var n=1,r=function(){return e.pageYOffset||t.compatMode==="CSS1Compat"&&t.documentElement.scrollTop||t.body.scrollTop||0},i=setInterval(function(){if(t.body){clearInterval(i);n=r();e.scrollTo(0,n===1?0:1)}},15);e.addEventListener("load",function(){setTimeout(function(){r()<20&&e.scrollTo(0,n===1?0:1)},0)})}})(this);

// social popupwindows
function popupwindow(url, title, w, h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

$.fn.centerize = function(){
  return this.each(function() {
    $this = $(this);

    $this.css({
      position:'absolute',
      left: ($(window).width() - $(this).outerWidth())/2,
      top: ($(window).height() - $(this).outerHeight())/2
    });
  });
};

/*
* FlexVerticalCenter.js 1.0
*/
(function( $ ){
$.fn.flexVerticalCenter = function( onAttribute ) {	
  return this.each(function(){
    var $this		= $(this);
    var attribute = onAttribute || 'margin-top';
    var resizer = function () {
      $this.css(
      attribute, ( ( $this.parent().height() - $this.height() ) / 2 )
      );
    };http://serveseattle.bajigroup.com/#
    resizer();
    $(window).resize(resizer);
    $this.find('img').load(resizer);
  });
};
})( jQuery );