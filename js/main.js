// Shrinking Navbar
$(window).scroll(function() {
  if ($(document).scrollTop() > 30) {
    $('header').addClass('shrink');
  } else {
    $('header').removeClass('shrink');
  }
});

// Scroll to div
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -50
    }, 500);
});