// Найти кнопку в HTML документе
let button = document.querySelector('#btn');
// Найти модальное окно в документе
let modal = document.querySelector('#modal');
// Найти элемент закрытия модалки
let close = document.querySelector('#close')
// Навестить на кнопку событие клика

button.addEventListener ('click', (event) => {
  //При клике на кнопку должно появиться модальное окно с формой входа
modal.style.display = 'block'
})

// Навесить на элемент событие клика
close.addEventListener('click', () => {
  //При клике на элемент закрытия модалки, сама модалка закрывается
  modal.style.display = 'none'
})