;(function ($) {
  'use strict'

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').delay(500).slideUp('slow') // set duration in brackets
  })

  // NAVBAR
  $('.navbar').headroom()

  $('.navbar-collapse a').click(function () {
    $('.navbar-collapse').collapse('hide')
  })

  $('.slick-slideshow').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
  })

  $('.slick-testimonial').slick({
    arrows: false,
    dots: true,
  })
})(window.jQuery)

$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      // Adjust 50 to your desired scroll threshold
      $('.navbar').addClass('scrolled')
    } else {
      $('.navbar').removeClass('scrolled')
    }
  })
})
