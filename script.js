// script.js

// Add smooth scrolling for navigation links
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

mobileNav.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  const navLinks = document.querySelector('nav ul');
  navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
});
