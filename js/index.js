const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".nav");
const closeNavbar = document.querySelector(".nav__close");
menu.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
closeNavbar.addEventListener("click", () => {
  nav.classList.remove("nav-active");
});
//atributo de frontend mentor
