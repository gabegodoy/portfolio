//MENU BTN

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__button');
const menuCheckbox = document.querySelector('#menu__checkbox');
const menuNav = document.querySelector('.menu__nav');
const menuItem = document.querySelector('.menu__link')

menuCheckbox.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
  menuButton.classList.toggle('menu__button--active')
  menuNav.classList.toggle('menu__nav--active')
})
