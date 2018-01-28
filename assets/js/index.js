"use strict"
$(document).ready(function () {
  $(".content").load("assets/html/start.html");
  console.log('start');
});

$(document).ready(function () {
  $("#load_start").on("click", function () {
    $(".content").load("assets/html/start.html");
    console.log('projects')
  });
});

$(document).ready(function () {
  $("#load_about").on("click", function () {
    $(".content").load("assets/html/about.html");
    console.log('about')
  });
});

$(document).ready(function () {
  $("#load_cv").on("click", function () {
    $(".content").load("assets/html/cv.html");
    console.log('cv')
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
