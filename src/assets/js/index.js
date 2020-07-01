"use strict";

var supportsCssVars =
  window.CSS &&
  window.CSS.supports &&
  window.CSS.supports("(color: var(--color))");

$(document).ready(function () {
  if (localStorage.getItem("color") !== null && supportsCssVars) {
    if (localStorage.getItem("color") === "dark") {
      makeDark();
    } else if (localStorage.getItem("color") === "light") {
      makeLight();
    } else if (localStorage.getItem("color") === "auto") {
      makeAuto();
    }
  }
  if (localStorage.getItem("color") === null) {
    makeAuto();
    localStorage.setItem("color", "auto");
  }
  if (supportsCssVars) $("#dark-light-toggle").removeClass("hide");

  function makeLight() {
    $("html").addClass("light");
    $("html").removeClass("dark");
    $("meta[property='theme']").attr("content", "#fff");
    console.log("goooood morning. i hope you have a fantastic day. :D");
  }

  function makeDark() {
    $("html").addClass("dark");
    $("html").removeClass("light");
    $("meta[property='theme']").attr("content", "#000");
    console.log("goooood night. sleep tight. :-)");
  }

  function makeAuto() {
    $("html").removeClass("dark");
    $("html").removeClass("light");
    console.log("automatic darkmode activaaaated! :D");
  }

  // hamburger menu active
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  // change theme to light
  $("#load_light").on("click", function () {
    makeLight();
    localStorage.setItem("color", "light");
  });

  // change theme to dark
  $("#load_dark").on("click", function () {
    makeDark();
    localStorage.setItem("color", "dark");
  });

  // change theme to auto (system)
  $("#load_auto").on("click", function () {
    makeAuto();
    localStorage.setItem("color", "auto");
  });

  // lightbox overflow toggle
  var toppiflopp;
  console.log("I am doing stuff");

  $(".content").on("click", "[id^='thumb-img-']", function (e) {
    toppiflopp = $(document).scrollTop();
    $("#lightbox-for-" + e.target.id).toggleClass("light-active");
    $("body").toggleClass("overflow");
  });

  $(".content").on("click", ".lightbox", function () {
    $("body").toggleClass("overflow");
    $(document).scrollTop(toppiflopp);
    $(".lightbox").removeClass("light-active");
  });
});
