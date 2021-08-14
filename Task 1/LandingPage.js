"use strict";

const navbar = document.querySelector(".nav-bar");
const openMenu = document.querySelector(".bx-menu");
const closeMenu = document.querySelector(".bx-x");

// Open menu

openMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-menu")) {
    navbar.classList.add("show-menu");
    openMenu.classList.add("hide-icon");
    closeMenu.classList.add("show-icon");
  }
});

// CLose menu

closeMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-x")) {
    navbar.classList.remove("show-menu");
    openMenu.classList.remove("hide-icon");
    closeMenu.classList.remove("show-icon");
  }
});

// const swiper = new Swiper('.hero-slider', {
//   loop: true,
//   slidesPerView: 3,
//   mousewheel: true,
//   centeredSlides: false,
//   observer: true,
//   observeParents: true,
// });