"use strict";

/** @type {Document['querySelector']} */
var $ = document.querySelector.bind(document);
var html = document.documentElement;
var supportsCssVars =
  window.CSS &&
  window.CSS.supports &&
  window.CSS.supports("(color: var(--color))");

if (document.readyState !== "loading") init();
else document.addEventListener("DOMContentLoaded", init);

function init() {
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
  if (supportsCssVars) $("#dark-light-toggle").classList.remove("hide");

  function makeLight() {
    html.classList.add("light");
    html.classList.remove("dark");
    $("meta[property='theme']").setAttribute("content", "#fff");
    console.log("goooood morning. i hope you have a fantastic day. :D");
  }

  function makeDark() {
    html.classList.add("dark");
    html.classList.remove("light");
    $("meta[property='theme']").setAttribute("content", "#000");
    console.log("goooood night. sleep tight. :-)");
  }

  function makeAuto() {
    html.classList.remove("dark");
    html.classList.remove("light");
    console.log("automatic darkmode activaaaated! :D");
  }

  // hamburger menu active
  $(".hamburger").addEventListener("click", function () {
    $(".hamburger").classList.toggle("is-active");
    $(".menu").classList.toggle("active");
    $("body").classList.toggle("overflow");
  });
  // change theme to light
  $("#load_light").addEventListener("click", function () {
    makeLight();
    localStorage.setItem("color", "light");
  });

  // change theme to dark
  $("#load_dark").addEventListener("click", function () {
    makeDark();
    localStorage.setItem("color", "dark");
  });

  // change theme to auto (system)
  $("#load_auto").addEventListener("click", function () {
    makeAuto();
    localStorage.setItem("color", "auto");
  });

  // lightbox overflow toggle
  var toppiflopp;
  var content = $(".content");
  console.log("I am doing stuff");

  if (content) {
    content.addEventListener("click", function (e) {
      if (!e.target.closest("[id^='thumb-img-']")) return;

      toppiflopp = document.scrollingElement.scrollTop;
      $("#lightbox-for-" + e.target.id).classList.toggle("light-active");
      $("body").classList.toggle("overflow");
    });

    content.addEventListener("click", function (e) {
      if (!e.target.closest(".lightbox")) return;

      $("body").classList.toggle("overflow");
      document.scrollingElement.scrollTop = toppiflopp;
      $(".lightbox").classList.remove("light-active");
    });
  }
}
