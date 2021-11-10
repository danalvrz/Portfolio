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

// popup
const bttn = document.querySelector('.see-project');
const modal = document.querySelector('.modal');
const closeX = document.querySelector('.closeX');
const popup = document.getElementById('#popup')

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
    preview: 'images/Rectangle34.png','images/Rectangle39.png', 'images/Rectangle40.png', 'images/Rectangle41.png','images/Rectangle42.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkLive: 'https://github.com/danalvrz/Portfolio',
    linkSource: 'https://github.com/danalvrz/Portfolio',
  },
];
modalInfo.forEach(({ name, description, technologies, preview, linkLive, linkSource})=> {
    popup.innerHTML +=`
    <div class="popup-content">
        <span class="closeX modalClose">
            <a href=""><img src="images/Union-2.svg" alt="x icon"/></a>
        </span>
        <h2 class="popup-name">${name}</h2>
        <ul class="technologies">
            <li class="lang">${technologies[0]}</li>
            <li class="lang">${technologies[1]}</li>
            <li class="lang">${technologies[2]}</li>
        </ul>
        <div class="images">
            <img src="${preview[0]}" alt="" class="">
            <div class="small-images">
                <img src="${preview[1]}" alt="" class="">
                <img src="${preview[2]}" alt="" class="">
                <img src="${preview[3]}" alt="" class="">
                <img src="${preview[4]}" alt="" class="">
            </div>
        </div> 
        <p class="description">${description}</p>
        <div class="popup-buttons">
            <form action="${linkLive}" "method="get" target="_blank">
                <button type="submit" class="Button">See live</button>
            </form> 
            <form action="${linkSource}" "method="get" target="_blank">
                <button type="submit" class="Button">See source</button>
            </form>    
        </div>
    </div>`
});