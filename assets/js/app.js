/*on click menu*/
document.querySelector('.toggle-menu').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('close')
})

document.querySelector('.popup_menu.normal').addEventListener('click', () => {
  document.querySelector('.popup_menu.normal').classList.toggle('opened')
})

/*darkmode*/
document.querySelector('.toggle-dark').addEventListener('click', () => {
  document.querySelector('.body').classList.toggle('dark')
})
// luminosité image en dark mode à modifier
// rajouter transition

/*toggle form*/
const blockElement = document.querySelector('.display-block');
const noneElement = document.querySelector('.display-none');

document.querySelector('.toggle-form').addEventListener('click', () => {
  blockElement.classList.toggle('display-block');
  blockElement.classList.toggle('display-none');
  noneElement.classList.toggle('display-block');
  noneElement.classList.toggle('display-none');
});
