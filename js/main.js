//MENU BTN

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__button');
const menuCheckbox = document.querySelector('#menu__checkbox');
const menuNav = document.querySelector('.menu__nav');
const menuItem = document.querySelector('.menu__link');
const homeContainer = document.querySelector('#home');


menuCheckbox.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
  menuButton.classList.toggle('menu__button--active')
  menuNav.classList.toggle('menu__nav--active')
})


//LANG CHOOSE
const modalContainer = document.querySelector('.modal__container');
const portugueseBtn = document.querySelector('#portugueseBtn');
const enligshBtn = document.querySelector('#enligshBtn');

portugueseBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none'
  //homeContainer.style.display = 'flex'
})

enligshBtn.addEventListener('click', () => {
  //homeContainer.style.display = 'flex'
  window.location.href = "english.html";

})