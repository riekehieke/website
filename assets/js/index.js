"use strict"

// on page load start.html
$(document).ready(function () {
  $(".content").load("assets/html/start.html");


  // hamburger menu active
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $(".body").toggleClass("overflow");
  });
  // load home on name click
  $("#load_home").on("click", function () {
    $(".content").load("assets/html/start.html");
  });
  // menu click work
  $("#load_start").on("click", function () {
    $(".content").load("assets/html/start.html");
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $(".body").toggleClass("overflow");
  });

  // menu click about
  $("#load_about").on("click", function () {
    $(".content").load("assets/html/about.html");
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $(".body").toggleClass("overflow");
  });

  // menu click cv
  $("#load_cv").on("click", function () {
    $(".content").load("assets/html/cv.html");
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $(".body").toggleClass("overflow");
  });

  // menu click contact
  $("#load_contact").on("click", function () {
    $(".content").load("assets/html/contact.html");
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $(".body").toggleClass("overflow");
  });

  // menu click imprint
  $("#load_imprint").on("click", function () {
    $(".content").load("assets/html/imprint.html");
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $(".body").toggleClass("overflow");
  });

  // change theme to light
  $("#load_light").on("click", function () {
    $("html").addClass("light");
    $("html").removeClass("dark");
    $("body").addClass("light");
    $("body").removeClass("dark");
    $("a").css("color", "#000");
    $(".overlay").css("background-color", "#fff");
    $(".lightbox").css("background", "#fff");
    $(".hamburger-box").children().css("background-color", "#000");
    // $(".hamburger-inner::before").css("background-color", "#000");
    // $(".hamburger-inner::after").css("background-color", "#000");
  });

  // change theme to dark
  $("#load_dark").on("click", function () {
    $("html").addClass("dark");
    $("html").removeClass("light");
    $("body").addClass("dark");
    $("body").removeClass("light");
    $("a").css("color", "#fff");
    $(".overlay").css("background-color", "#000");
    $(".lightbox").css("background", "#000");
    $(".hamburger-inner").css("background-color", "#fff");
    $(".hamburger-inner::before").css("background-color", "#fff");
    $(".hamburger-inner::after").css("background-color", "#fff");
  });

  // on click load projects
  $(".content").on("click", "#pr11", function () {
    $(".content").load("assets/projects/klima.html");
  });
  $(".content").on("click", "#pr10", function () {
    $(".content").load("assets/projects/time.html");
  });
  $(".content").on("click", "#pr9", function () {
    $(".content").load("assets/projects/typro.html");
  });
  $(".content").on("click", "#pr8", function () {
    $(".content").load("assets/projects/marketing.html");
  });
  $(".content").on("click", "#pr7", function () {
    $(".content").load("assets/projects/bewerbung.html");
  });
  $(".content").on("click", "#pr6", function () {
    $(".content").load("assets/projects/rh.html");
  });
  $(".content").on("click", "#pr5", function () {
    $(".content").load("assets/projects/sternenhimmel.html");
  });
  $(".content").on("click", "#pr4", function () {
    $(".content").load("assets/projects/circular.html");
  });
  $(".content").on("click", "#pr3", function () {
    $(".content").load("assets/projects/abstract.html");
  });
  $(".content").on("click", "#pr2", function () {
    $(".content").load("assets/projects/posters.html");
  });
  $(".content").on("click", "#pr1", function () {
    $(".content").load("assets/projects/photography.html");
  });
  $(".content").on("click", "#goto_contact", function () {
    $(".content").load("assets/html/contact.html");
  });

  // lightbox overflow toggle
  var toppiflopp;
  $(".content").on("click", ".img", function (e) {
    toppiflopp = $(document).scrollTop();
    $('#' + e.target.id + '-l').toggleClass("light-active");
    $("body").toggleClass("overflow");
  });
  $(".content").on("click", ".img_last", function (e) {
    toppiflopp = $(document).scrollTop();
    $('#' + e.target.id + '-l').toggleClass("light-active");
    $("body").toggleClass("overflow");
  });
  $(".content").on("click", ".hochformat", function (e) {
    toppiflopp = $(document).scrollTop();
    $('#' + e.target.id + '-l').toggleClass("light-active");
    $("body").toggleClass("overflow");
  });
  $(".content").on("click", ".hochformat_last", function (e) {
    toppiflopp = $(document).scrollTop();
    $('#' + e.target.id + '-l').toggleClass("light-active");
    $("body").toggleClass("overflow");
  });
  $(".content").on("click", ".lightbox", function () {
    $("body").toggleClass("overflow");
    $(document).scrollTop(toppiflopp);
    $(".lightbox").removeClass("light-active");
  });
});
