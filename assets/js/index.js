"use strict"


// on page load start.html
$(document).ready(function () {
  router.init();

  // hamburger menu active
  $(".hamburger").on("click", function () {
    $(".hamburger").addClass("is-active");
    $(".menu").addClass("active");
    $(".body").addClass("overflow");
  });
  // change theme to light
  $("#load_light").on("click", function () {
    $("html").get(0).style.setProperty("--bg-color", "#fff");
    $("html").get(0).style.setProperty("--txt-color", "#000");
    $("body").get(0).style.setProperty("--bg-color", "#fff");
    $("body").get(0).style.setProperty("--txt-color", "#000");
    $("html").get(0).style.setProperty("--plus-color", "#a5a5a5");
    $("body").get(0).style.setProperty("--plus-color", "#a5a5a5");
  });

  $("#load_dark").on("click", function () {
    $("html").get(0).style.setProperty("--bg-color", "#000");
    $("html").get(0).style.setProperty("--txt-color", "#fff");
    $("body").get(0).style.setProperty("--bg-color", "#000");
    $("body").get(0).style.setProperty("--txt-color", "#fff");
    $("html").get(0).style.setProperty("--plus-color", "#585858");
    $("body").get(0).style.setProperty("--plus-color", "#585858");
  });


  $(document).on('click', '.router', function (e) {
    e.preventDefault();
    var link = new URL(e.currentTarget.href);
    var url = (link.pathname + link.search);
    router.push(url);
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
