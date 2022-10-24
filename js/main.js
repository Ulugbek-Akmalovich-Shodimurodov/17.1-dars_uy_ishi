let cardList = document.querySelector('.modal-cards-list');
let popup = document.querySelector('.popup');
let openMContainer = document.querySelector('.modal-container');
let modalBtn = document.querySelector('.modal-btn');
let modalTitle = document.querySelector('.modal-title');
let navbarOpenBtn = document.querySelector('.site-navbar__bars')
let navbarList = document.querySelector('.site__navbar-list')
let modalClose = document.querySelector('.modal-container')

function openModal(){
    popup.classList.add('open-popup');
    openMContainer.classList.add('modal-container__event');
}
function closeModal(){
    popup.classList.remove('open-popup');
    openMContainer.classList.remove('modal-container-open');
    modalClose.classList.remove('modal-container__event');
}
function findNumber(e){
    modalTitle.textContent = `${e.target.textContent}`;
    popup.classList.add('open-popup');
    openModal();         
    openMContainer.classList.add('modal-container-open');
}
function navbarOpen(){
    navbarList.classList.toggle('navbar__list-open')
}

cardList.addEventListener('click', findNumber);
modalBtn.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
navbarOpenBtn.addEventListener('click', navbarOpen);