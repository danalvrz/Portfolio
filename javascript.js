const menu = document.querySelector('.hamburger-menu');
const hamb = document.querySelector('.hamb');
const xIcon = document.querySelector('.xIcon');

function toggleMenu(){
    if (menu.classList.contains('showMenu')){
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
    } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    }
}

hamb.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menuLink');
