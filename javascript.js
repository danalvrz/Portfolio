const menu = document.querySelector('.hamburger-menu');
const ham = document.querySelector('.menu-ham');
const xicon = document.querySelector('.xIcon');

function toggleMenu(){
    if (menu.classList.contains('showMenu')){
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
    } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    }
}

ham.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menuLink');
