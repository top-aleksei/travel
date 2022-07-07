console.log(`1. Вёрстка соответствует макету. Ширина экрана 390px +48
    1.1 блок <header> +6
    1.2 секция preview +9
    1.3 секция steps +9
    1.4 секция destinations +9
    1.5 секция stories +9
    1.6 блок <footer> +6
2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
    3.1 нет полосы прокрутки при ширине страницы от 1440рх до 390px +7
    3.2 нет полосы прокрутки при ширине страницы от 390px до 320рх +8   
3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22
    3.1 при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2
    3.2 при нажатии на бургер-иконку плавно появляется адаптивное меню +4
    3.3 адаптивное меню соответствует макету +4
    3.4 при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
    3.5 ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)
    3.6 при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4

100/100
`);

const menu = document.querySelector(".burger-menu");
const burgerOpen = document.querySelector(".show-burger");
const burgerClose = document.querySelector(".burger-cross-img");

document.addEventListener("click", (e) => {
  let menuIsActive = menu.classList.contains("active");
  const clk = e.composedPath().includes(menu);
  const crr = e.composedPath().includes(burgerOpen);
  if (menuIsActive && !clk && !crr) {
    console.log("a");
    menu.classList.remove("active");
  }
});

burgerOpen.addEventListener("click", () => {
  menu.classList.toggle("active");
});

burgerClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

menu.querySelectorAll(".burger-link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
