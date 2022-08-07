const visuallyImpairedBtn = document.querySelector(".visually-impaired__btn");
/*Кнопка переключения версии для слабовидящих*/
visuallyImpairedBtn.onclick = function () {
  visuallyImpairedBtn.classList.toggle("visually-impaired__btn--eye-crossed");
};
