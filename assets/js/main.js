;(function ($) {
  var $window = $(window),
    $body = $('body')

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: [null, '736px'],
  })

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload')
    }, 100)
  })

  // Dropdowns.
  $('#nav > ul').dropotron({
    mode: 'fade',
    noOpenerFade: true,
    alignment: 'center',
    detach: false,
  })

  // Nav.

  // Title Bar.
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $('#logo h1').html() +
      '</span>' +
      '</div>'
  ).appendTo($body)

  // Panel.
  $('<div id="navPanel">' + '<nav>' + $('#nav').navList() + '</nav>' + '</div>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'left',
      target: $body,
      visibleClass: 'navPanel-visible',
    })
})(jQuery)

// // ---------Quotes-----------
var current = 0,
  max = $('.q-slider > .q-slide').length
$('.q-slider > .q-slide:gt(0)').hide()
$('.q-counter').text('1 of ' + max)

setInterval(function () {
  $('.q-slider > .q-slide:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.q-slider')
  current++
  if (current >= max) current = 0
  $('.q-progress').width(((current + 1) * 315) / max)
  $('.q-counter').text(current + 1 + ' of ' + max)
}, 3000)
// // ---------End OfQuotes-----------

// // ---------Partners/Sponsors-----------
$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  })
})
