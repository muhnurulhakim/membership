// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  });
});

// Toggle mobile navigation
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelector('nav ul');

mobileNav.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  navLinks.classList.toggle('show');
});
