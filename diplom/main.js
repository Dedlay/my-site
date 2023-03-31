// Получить модальное окно
var modal = document.getElementById("myModal");

// Получить кнопку, которая закрывает модальное окно
var closeBtn = document.getElementsByClassName("close")[0];

// Открывает модальное окно при загрузке страницы
window.onload = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на кнопку, модальное окно закрывается
closeBtn.onclick = function() {
    modal.style.display = "none";
}
// Скрытие прелоадера после 3-х секунд
setTimeout(function() {
    document.querySelector('body').classList.add('loaded');
  }, 4000);
  