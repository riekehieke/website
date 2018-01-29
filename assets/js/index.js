"use strict"

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  var overflow = document.querySelector("body");
  overflow.classList.toggle("overflow");
});

var img = document.querySelector(".img");
img.addEventListener("click", function () {
  var scrolling = document.querySelector("body");
  scrolling.classList.toggle("overflow");
});

var lightbox = document.querySelector(".lightbox");
lightbox.addEventListener("click", function () {
  var body = document.querySelector("body");
  body.classList.toggle("overflow");
});