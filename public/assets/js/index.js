"use strict"

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
function parseUri(r) { for (var e = parseUri.options, o = e.parser[e.strictMode ? "strict" : "loose"].exec(r), s = {}, t = 14; t--;)s[e.key[t]] = o[t] || ""; return s[e.q.name] = {}, s[e.key[12]].replace(e.q.parser, function (r, o, t) { o && (s[e.q.name][o] = t) }), s } parseUri.options = { strictMode: !1, key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g }, parser: { strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/, loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ } };
var supportsCssVars = window.CSS && window.CSS.supports && window.CSS.supports('(color: var(--color))');

$(document).ready(function () {
  router.init();
  if (localStorage.getItem('color') !== null && supportsCssVars) {
    localStorage.getItem('color') === 'dark' ? makeDark() : makeLight();
  }
  if (supportsCssVars) $('#dark-light-toggle').removeClass('hide');

  function makeLight() {
    $("html").get(0).style.setProperty("--bg-color", "#fff");
    $("html").get(0).style.setProperty("--txt-color", "#000");
    $("body").get(0).style.setProperty("--bg-color", "#fff");
    $("body").get(0).style.setProperty("--txt-color", "#000");
    $("html").get(0).style.setProperty("--plus-color", "#a5a5a5");
    $("body").get(0).style.setProperty("--plus-color", "#a5a5a5");
    $("#logo_w").addClass("inactive");
    $("#logo_s").removeClass("inactive");
    $("meta[property='theme']").attr("content", '#fff');
    console.log('goooood morning. i hope you have a fantastic day. :D');
  };


  function makeDark() {
    $("html").get(0).style.setProperty("--bg-color", "#000");
    $("html").get(0).style.setProperty("--txt-color", "#fff");
    $("body").get(0).style.setProperty("--bg-color", "#000");
    $("body").get(0).style.setProperty("--txt-color", "#fff");
    $("html").get(0).style.setProperty("--plus-color", "#585858");
    $("body").get(0).style.setProperty("--plus-color", "#585858");
    $("#logo_s").addClass("inactive");
    $("#logo_w").removeClass("inactive");
    $("meta[property='theme']").attr("content", '#000');
    console.log('goooood night. sleep tight. :-)');
  }
  // hamburger menu active
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $("html").toggleClass("overflow");
  });
  // change theme to light
  $("#load_light").on("click", function () {
    makeLight();
    localStorage.setItem('color', 'light');
  });

  // dark
  $("#load_dark").on("click", function () {
    makeDark();
    localStorage.setItem('color', 'dark');
  });


  $(document).on('click', '.router', function (e) {
    e.preventDefault();
    var link = parseUri(e.currentTarget.href);
    var url = link.relative;
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
