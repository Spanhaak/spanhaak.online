const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active'),
  document.getElementsByClassName('content')[0].style.marginTop = '120px';
})