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





// Desativar o overflow do body Caso Modal Aberta
document.addEventListener('DOMContentLoaded', function() {
  if(modalContainer.style.display !== 'none')   disableOverflow(true)
});



//LANG CHOOSE
const modalContainer = document.querySelector('.modal__container');
const portugueseBtn = document.querySelector('#portugueseBtn');
const enligshBtn = document.querySelector('#enligshBtn');

if(viewLocalStorage() === 'true') {
  disableOverflow(false)
  disableLangModal(true)
}

portugueseBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none'
  //homeContainer.style.display = 'flex'
    disableOverflow(false)
    disableLangModal(true)
    
  })
  
  enligshBtn.addEventListener('click', () => {
    //homeContainer.style.display = 'flex'
    window.location.href = "english.html";
    disableOverflow(false)
    disableLangModal(true)


})


function viewLocalStorage (){

  return localStorage.getItem("chave");
} 


function disableLangModal(param){

  if(param){
    localStorage.setItem("chave", JSON.stringify(true));
    modalContainer.style.display = 'none'
  } 
  else{
    localStorage.removeItem("chave");
  } 
  
}




function disableOverflow(param){
  if(param){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'auto';
  }

}