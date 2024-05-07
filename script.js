// Initialize Slick slider
$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

// Form validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  if (!email || !password) {
    alert('Harap isi semua bidang yang diperlukan.');
    event.preventDefault();
  }
});

// Scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

// Social media sharing
document.getElementById('facebookShareBtn').addEventListener('click', function() {
  var url = window.location.href;
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), 'facebook-share-dialog', 'width=626,height=436');
});

document.getElementById('twitterShareBtn').addEventListener('click', function() {
  var url = window.location.href;
  window.open('https://twitter.com/share?url=' + encodeURIComponent(url), 'twitter-share-dialog', 'width=626,height=436');
});
