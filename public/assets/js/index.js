"use strict";

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
function parseUri(r) {
  for (
    var e = parseUri.options,
      o = e.parser[e.strictMode ? "strict" : "loose"].exec(r),
      s = {},
      t = 14;
    t--;

  )
    s[e.key[t]] = o[t] || "";
  return (
    (s[e.q.name] = {}),
    s[e.key[12]].replace(e.q.parser, function(r, o, t) {
      o && (s[e.q.name][o] = t);
    }),
    s
  );
}
parseUri.options = {
  strictMode: !1,
  key: [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
  ],
  q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
  parser: {
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};
var supportsCssVars =
  window.CSS &&
  window.CSS.supports &&
  window.CSS.supports("(color: var(--color))");

$(document).ready(function() {
  router.init();
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

  $("#sprache").on("click", toggleLanguage);

  function makeLight() {
    $("html").addClass("light");
    // $("body").addClass("light");
    $("meta[property='theme']").attr("content", "#fff");
    console.log("goooood morning. i hope you have a fantastic day. :D");
  }

  function makeDark() {
    $("html").addClass("dark");
    // $("body").addClass("dark");
    $("meta[property='theme']").attr("content", "#000");
    console.log("goooood night. sleep tight. :-)");
  }

  function makeAuto() {
    $("html").removeClass("dark");
    // $("body").removeClass("dark");
    $("html").removeClass("light");
    // $("body").removeClass("light");
    console.log("automatic darkmode activaaaated! :D");
  }

  // hamburger menu active
  $(".hamburger").on("click", function() {
    $(".hamburger").toggleClass("is-active");
    $(".menu").toggleClass("active");
    $("html").toggleClass("overflow");
  });
  // change theme to light
  $("#load_light").on("click", function() {
    makeLight();
    localStorage.setItem("color", "light");
  });

  // change theme to dark
  $("#load_dark").on("click", function() {
    makeDark();
    localStorage.setItem("color", "dark");
  });

  // change theme to auto (system)
  $("#load_auto").on("click", function() {
    makeAuto();
    localStorage.setItem("color", "auto");
  });

  $(document).on("click", ".router", function(e) {
    e.preventDefault();
    var link = parseUri(e.currentTarget.href);
    var url = link.relative;
    router.push(url);
  });

  // lightbox overflow toggle
  var toppiflopp;
  $(".content").on("click", ".img", function(e) {
    toppiflopp = $(document).scrollTop();
    $("#" + e.target.id + "-l").toggleClass("light-active");
    $("body").toggleClass("overflow");
  });
  $(".content").on("click", ".img_last", function(e) {
    toppiflopp = $(document).scrollTop();
    $("#" + e.target.id + "-l").toggleClass("light-active");
    $("body").toggleClass("overflow");
  });
  $(".content").on("click", ".hochformat", function(e) {
    toppiflopp = $(document).scrollTop();
    $("#" + e.target.id + "-l").toggleClass("light-active");
    $("body").toggleClass("overflow");
  });
  $(".content").on("click", ".hochformat_last", function(e) {
    toppiflopp = $(document).scrollTop();
    $("#" + e.target.id + "-l").toggleClass("light-active");
    $("body").toggleClass("overflow");
  });
  $(".content").on("click", ".lightbox", function() {
    $("body").toggleClass("overflow");
    $(document).scrollTop(toppiflopp);
    $(".lightbox").removeClass("light-active");
  });
});
