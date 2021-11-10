const menu = document.querySelector('.mobile-menu');
const ham = document.querySelector('.hamburger-menu');
const xIcon = document.querySelector('.xIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
  }
}

ham.addEventListener('click', toggleMenu);

// Popup Window
const popup = document.getElementById('popup');
con