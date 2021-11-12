/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
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
const projects = [
  {
    name: 'Project name goes here ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: [
      'images/laptop1.png',
      'images/Group109.jpg',
      '/Images/Rectangle40.png',
      '/Images/Rectangle41.png',
      '/Images/Rectangle42.png',
    ],
    liveURL: 'https://ivaan1992.github.io/Figma-Template/',
    link: 'https://github.com/ivaan1992',
  },
  {
    name: 'Project name goes here ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: [
      'images/laptop2.png',
      '/Images/Rectangle39.png',
      '/Images/Rectangle40.png',
      '/Images/Rectangle41.png',
      '/Images/Rectangle42.png',
    ],
    liveURL: 'https://ivaan1992.github.io/Figma-Template/',
    link: 'https://github.com/ivaan1992',
  },
  {
    name: 'Project name goes here ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: [
      'images/laptop3.png',
      '/Images/Rectangle39.png',
      '/Images/Rectangle40.png',
      '/Images/Rectangle41.png',
      '/Images/Rectangle42.png',
    ],
    liveURL: 'https://ivaan1992.github.io/Figma-Template/',
    link: 'https://github.com/ivaan1992',
  },
  {
    name: 'Project name goes here ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: [
      'images/laptop4.png',
      '/Images/Rectangle39.png',
      '/Images/Rectangle40.png',
      '/Images/Rectangle41.png',
      '/Images/Rectangle42.png',
    ],
    liveURL: 'https://ivaan1992.github.io/Figma-Template/',
    link: 'https://github.com/ivaan1992',
  },
  {
    name: 'Project name goes here ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: [
      'images/laptop5.png',
      '/Images/Rectangle39.png',
      '/Images/Rectangle40.png',
      '/Images/Rectangle41.png',
      '/Images/Rectangle42.png',
    ],
    liveURL: 'https://ivaan1992.github.io/Figma-Template/',
    link: 'https://github.com/ivaan1992',
  },
  {
    name: 'Project name goes here ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image: [
      'images/laptop6.png',
      '/Images/Rectangle39.png',
      '/Images/Rectangle40.png',
      '/Images/Rectangle41.png',
      '/Images/Rectangle42.png',
    ],
    liveURL: 'https://ivaan1992.github.io/Figma-Template/',
    link: 'https://github.com/ivaan1992',
  },
];

for (let i = 0; i < projects.length; i += 1) {
  document.getElementById('portfolio').innerHTML += `
    <img src="${projects[i].image[0]}" alt="laptop" class="laptop" id="laptop${i + 1}">
    <section class="project" id="project${i + 1}">
      <h3 class="nameModal proj-name">${projects[i].name}</h3>
      <ul class="tools">
          <li class="tool">${projects[i].technologies[0]}</li>
          <li class="tool">${projects[i].technologies[1]}</li>
          <li class="tool">${projects[i].technologies[2]}</li>
        </ul>
        <button onclick="myModal(this.id)" type="button" id="see-project${
  i + 1
}" class="see-project">
          See this project<img
            src="images/arrow1.png"
            alt="arrow"
            class="arrow mobile"
          /><img src="images/Union.svg" alt="arrow" class="arrow desktop" />
        </button>
      </section>`;

  document.getElementById('modal-card').innerHTML += `
     <!-- The Modal -->
    <section id="modal" class="modal">
    
        <!-- Modal Content-->
          <span class="closeX modalClose"
            ><img src="images/Union-2.svg" alt="x icon"
          /></span>
          <div class="modal-content">
            <h3 class="proj-name nameModal">${projects[i].name}</h3>
            <ul class="tools techModal">
              <li class="tool">${projects[i].technologies[0]}</li>
              <li class="tool">${projects[i].technologies[1]}</li>
              <li class="tool">${projects[i].technologies[2]}</li>
            </ul>
            <img class="modalPreview" src="${projects[i].image[1]}" alt="project preview" />
            <p class="descripModal">${projects[i].description}</p><br>
            <p class="descripModal">${projects[i].description}</p><br>
            <div class="modal-buttons">
              <button type="button" class="see-live">
                See live<img
                  src="images/ic_link.svg"
                  alt="live icon"
                  class="live"
                />
              </button>
              <button type="button" class="see-source" id="see-source">
                See source<img
                  src="images/github.svg"
                  alt="github icon"
                  class="source mobil"
                  id="githubN"
                /><span>
                <img
                  src="images/github2.svg"
                  alt="github icon"
                  class="source desktop"
                  id="githubW"
                />
                </span>
              </button>
            </div>
          </div>
        </section>
        <!-- End of Modal -->`;
}

const modal = document.querySelector('.modal');
const closeX = document.querySelector('.closeX');
const navMenu = document.querySelector('.header');

closeX.onclick = function hideModal() {
  modal.style.display = 'none';
  navMenu.style.display = '';
};

function myModal(clicked_id) {
  const modal = document.getElementById('.modal');
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
    navMenu.style.display = 'block';
  } else {
    modal.style.display = 'block';
    navMenu.style.display = 'none';
  }
  return clicked_id;
}

// Validate contact Form

const contactForm = document.querySelector('#from');

function validateEmail() {
  const emailInput = document.querySelector('#email');
  const emailError = document.querySelector('#email-error');
  const emailLowerCase = emailInput.value.toLowerCase();

  if (emailInput.value !== emailLowerCase) {
    emailError.innerHTML = `Your email should be in lower case please use "<span style="color:black">${emailLowerCase}</span>" instead.`;
    return false;
  }
  return true;
}
contactForm.addEventListener('submit', (sub) => {
  if (!validateEmail()) {
    sub.preventDefault();
  }
});

// Data Storage

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('textarea');

function storeForm() {
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    text: textInput.value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

nameInput.addEventListener('input', () => {
  storeForm();
});
emailInput.addEventListener('input', () => {
  storeForm();
});
textInput.addEventListener('input', () => {
  storeForm();
});

window.addEventListener('load', () => {
  const windowData = localStorage.getItem('data');
  const parseWindow = JSON.parse(windowData);
  nameInput.value = parseWindow.name;
  emailInput.value = parseWindow.email;
  textInput.value = parseWindow.text;
});