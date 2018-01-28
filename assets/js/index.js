"use strict"
$(document).ready(function () {
  $("#load_start").on("click", function () {
    $("#content").load("../html/start.html");
    console.log('funktion läuft')
  });
});

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  var overflow = document.querySelector("body");
  overflow.classList.toggle("overflow");
});
