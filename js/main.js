let cardList = document.querySelector('.modal-cards-list');
let popup = document.querySelector('.popup');
let openMContainer = document.querySelector('.modal-container');
let modalBtn = document.querySelector('.modal-btn');
let modalTitle = document.querySelector('.modal-title');
let navbarOpenBtn = document.querySelector('.site-navbar__bars')
let navbarList = document.querySelector('.site__navbar-list')

function openModal(){
    popup.classList.add('open-popup');
    openMContainer.classList.add('modal-container-open');
}
function closeModal(){
    popup.classList.remove('open-popup');
    openMContainer.classList.remove('modal-container-open');
}
function findNumber(e){
    modalTitle.textContent = `${e.target.textContent}`;
    popup.classList.add('open-popup');
    openModal();         
}
function navbarOpen(){
    navbarList.classList.toggle('navbar__list-open')
}

cardList.addEventListener('click', findNumber);
modalBtn.addEventListener('click', closeModal);
navbarOpenBtn.addEventListener('click', navbarOpen);