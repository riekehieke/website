"use strict"
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  var overflow = document.querySelector(".body");
  overflow.classList.toggle("overflow");
});