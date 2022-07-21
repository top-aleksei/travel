// console.log(`1. Вёрстка соответствует макету. Ширина экрана 390px +48
//     1.1 блок <header> +6
//     1.2 секция preview +9
//     1.3 секция steps +9
//     1.4 секция destinations +9
//     1.5 секция stories +9
//     1.6 блок <footer> +6
// 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
//     2.1 нет полосы прокрутки при ширине страницы от 1440рх до 390px +7
//     2.2 нет полосы прокрутки при ширине страницы от 390px до 320рх +8
// 3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22
//     3.1 при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2
//     3.2 при нажатии на бургер-иконку плавно появляется адаптивное меню +4
//     3.3 адаптивное меню соответствует макету +4
//     3.4 при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
//     3.5 ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)
//     3.6 при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4

// 85/75
// `);

const menu = document.querySelector(".burger-menu");
const burgerOpen = document.querySelector(".show-burger");
const burgerClose = document.querySelector(".burger-cross-img");

const D_LOGIN_BTN = document.querySelector(".button__header");
const M_LOGIN_BTN = document.getElementById("mobile-login");
const POPUP = document.querySelector(".pop-up");
const POPUP_MENU = document.querySelector(".pop-up__login");
const body = document.body;
const SIGN_IN_BTN = document.querySelector(".signIn-button");
const REGISTER = document.getElementById("register-link");
const hideOnRegister = document.querySelectorAll(".hide-on-register");

//// POP - UP //// POP - UP //// POP - UP //// POP - UP //// POP - UP //// POP - UP ////
const hidePopup = () => {
  POPUP.classList.remove("show-popup");
  body.classList.remove("lock");
};
const showPopup = () => {
  POPUP.classList.add("show-popup");
  body.classList.add("lock");
};

const alertInput = () => {
  let x1 = document.getElementById("input-email").value;
  let x2 = document.getElementById("input-password").value;
  alert(`email: ${x1}\npassword: ${x2}`);
};
const toCreateAccount = () => {
  hideOnRegister.forEach((el) => el.classList.add("hide"));
  POPUP_MENU.classList.add("create-size");
  document.querySelector(".pop-up__title").innerHTML = "Create account";
  SIGN_IN_BTN.innerHTML = "Sign Up";
  SIGN_IN_BTN.removeEventListener("click", alertInput);
  document.querySelector(".dont-have-accouunt").firstChild.data =
    "Already have an account? ";
  REGISTER.firstChild.data = "Log in";
};

D_LOGIN_BTN.addEventListener("click", showPopup);
M_LOGIN_BTN.addEventListener("click", showPopup);
POPUP.addEventListener("click", (e) => {
  if (e.target.classList.contains("pop-up")) {
    hidePopup();
    hideOnRegister.forEach((el) => el.classList.remove("hide"));
    POPUP_MENU.classList.remove("create-size");
    document.querySelector(".pop-up__title").innerHTML =
      "Log in to your account";
    SIGN_IN_BTN.innerHTML = "Sign In";
    SIGN_IN_BTN.addEventListener("click", alertInput);
    document.querySelector(".dont-have-accouunt").firstChild.data =
      "Don't have an account? ";
    REGISTER.firstChild.data = "Register";
  }
});
SIGN_IN_BTN.addEventListener("click", alertInput);
REGISTER.addEventListener("click", toCreateAccount);

// // SLIDER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let startSlider = document.querySelectorAll(".destination-1-slider");
let DESCTOP_BTN_LEFT = document.getElementsByClassName("item-left")[0];
let DESCTOP_BTN_RIGHT = document.getElementsByClassName("item-right")[0];
let SUPER_LEFT = document.getElementsByClassName("item-superleft")[0];
let SUPER_RIGHT = document.getElementsByClassName("item-superright")[0];
let ACTIVE_SLIDE = document.getElementsByClassName("item-active")[0];
const SLIDER = document.querySelector(".destination__slider");
const DOTS = document.querySelectorAll(".destination__dot");

const M_BTN_LEFT = document.getElementById("LMB");
const M_BTN_RIGHT = document.getElementById("RMB");

const moveDotRight = () => {
  for (let i = 0; i < 3; i++) {
    if (DOTS[i].classList.contains("selected__dot") && i != 2) {
      DOTS[i].classList.remove("selected__dot");
      DOTS[i + 1].classList.add("selected__dot");
      console.log(i);
      return;
    } else if (i == 2) {
      DOTS[2].classList.remove("selected__dot");
      DOTS[0].classList.add("selected__dot");
    }
  }
};

const moveDotLeft = () => {
  for (let i = 2; i >= 0; i--) {
    if (DOTS[i].classList.contains("selected__dot") && i != 0) {
      DOTS[i].classList.remove("selected__dot");
      DOTS[i - 1].classList.add("selected__dot");
      console.log(i);
      return;
    } else if (i == 0) {
      DOTS[0].classList.remove("selected__dot");
      DOTS[2].classList.add("selected__dot");
    }
  }
};

const moveMobileLeft = () => {
  SLIDER.classList.add("mobile-left");
  M_BTN_LEFT.removeEventListener("click", moveMobileLeft);
  M_BTN_RIGHT.removeEventListener("click", moveMobileRight);
  moveDotLeft();
};

const moveMobileRight = () => {
  SLIDER.classList.add("mobile-right");
  M_BTN_LEFT.removeEventListener("click", moveMobileLeft);
  M_BTN_RIGHT.removeEventListener("click", moveMobileRight);
  moveDotRight();
};

const moveLeft = () => {
  SLIDER.classList.add("transition-left");
  DESCTOP_BTN_LEFT.removeEventListener("click", moveLeft);
  DESCTOP_BTN_RIGHT.removeEventListener("click", moveRight);
  moveDotLeft();
};

const moveRight = () => {
  SLIDER.classList.add("transition-right");
  DESCTOP_BTN_RIGHT.removeEventListener("click", moveRight);
  DESCTOP_BTN_LEFT.removeEventListener("click", moveLeft);
  moveDotRight();
};

DESCTOP_BTN_LEFT.addEventListener("click", moveLeft);
DESCTOP_BTN_RIGHT.addEventListener("click", moveRight);

M_BTN_LEFT.addEventListener("click", moveMobileLeft);
M_BTN_RIGHT.addEventListener("click", moveMobileRight);

SLIDER.addEventListener("animationend", (e) => {
  if (e.animationName == "move-left" || e.animationName == "mobile-left") {
    SLIDER.classList.remove("transition-left");
    SLIDER.classList.remove("mobile-left");
    SUPER_RIGHT.innerHTML = DESCTOP_BTN_RIGHT.innerHTML;
    DESCTOP_BTN_RIGHT.innerHTML = ACTIVE_SLIDE.innerHTML;
    ACTIVE_SLIDE.innerHTML = DESCTOP_BTN_LEFT.innerHTML;
    DESCTOP_BTN_LEFT.innerHTML = SUPER_LEFT.innerHTML;
    SUPER_LEFT.innerHTML = DESCTOP_BTN_RIGHT.innerHTML;
  } else {
    SLIDER.classList.remove("transition-right");
    SLIDER.classList.remove("mobile-right");
    SUPER_LEFT.innerHTML = DESCTOP_BTN_LEFT.innerHTML;
    DESCTOP_BTN_LEFT.innerHTML = ACTIVE_SLIDE.innerHTML;
    ACTIVE_SLIDE.innerHTML = DESCTOP_BTN_RIGHT.innerHTML;
    DESCTOP_BTN_RIGHT.innerHTML = SUPER_RIGHT.innerHTML;
    SUPER_RIGHT.innerHTML = DESCTOP_BTN_LEFT.innerHTML;
  }

  DESCTOP_BTN_LEFT.addEventListener("click", moveLeft);
  DESCTOP_BTN_RIGHT.addEventListener("click", moveRight);
  M_BTN_LEFT.addEventListener("click", moveMobileLeft);
  M_BTN_RIGHT.addEventListener("click", moveMobileRight);
});

// BURGGER MENUUU--------------------------

document.addEventListener("click", (e) => {
  let menuIsActive = menu.classList.contains("active");
  const clk = e.composedPath().includes(menu);
  const crr = e.composedPath().includes(burgerOpen);
  if (menuIsActive && !clk && !crr) {
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

///////////////////////////
