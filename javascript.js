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

const bttn = document.querySelector('.see-project');
const modal = document.querySelector('.modal');
const closeX = document.querySelector('.closeX');

bttn.onclick = function showModal() {
  modal.style.display = 'block';
};
closeX.onclick = function hideModal() {
  modal.style.display = 'none';
};

const modalInfo = [
  {
    name: 'Project Name Uno',
    description: 'Description blabla',
    preview: 'images/Group 109.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkLive: 'https://github.com/danalvrz/Portfolio',
    linkSource: 'https://github.com/danalvrz/Portfolio',
  },
];