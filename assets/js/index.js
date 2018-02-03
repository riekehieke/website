"use strict"

function loadPage(page) {
  $(".content").load("assets/html/" + page + ".html");
  $(".hamburger").removeClass("is-active");
  $(".menu").removeClass("active");
  $(".body").removeClass("overflow");

}
var routes = [
  {
    path: '/', page: 'start'
  },
  {
    path: '/start', page: 'start'
  },
  {
    path: '/about', page: 'about'
  },
  {
    path: '/contact', page: 'contact'
  },
  {
    path: '/imprint', page: 'imprint'
  }
]

var router = {
  push: function (path, pushState) {
    pushState = pushState === "undefined" ? true : pushState;
    var page = router.match(path);
    var title = page === 'start' ? 'rieke helmers' : page;
    loadPage(page);
    if (pushState) history.pushState({}, title, page);
    $('title').text(title);
    return false;
  },
  init: function () {
    window.addEventListener('popstate', function (url) { router.push(url.path[0].location.pathname), false })
    router.push(window.location.pathname.replace('.html', ''))
  },
  match: function (matchPath) {
    return routes.reduce(function (a, b) {
      if (b.path === matchPath) return b.page
      else return a
    }, '404');
  }
}
// on page load start.html
$(document).ready(function () {
  //$(".content").load("assets/html/start.html");
  router.init();

  // hamburger menu active
  $(".hamburger").on("click", function () {
    $(".hamburger").addClass("is-active");
    $(".menu").addClass("active");
    $(".body").addClass("overflow");
  });
  // // load home on name click
  // $("#load_home").on("click", function () {
  //   $(".content").load("assets/html/start.html");
  // });
  // // menu click work
  // $("#load_start").on("click", function () {
  //   // $(".content").load("assets/html/start.html");
  //   $(".hamburger").toggleClass("is-active");
  //   $(".menu").toggleClass("active");
  //   $(".body").toggleClass("overflow");
  // });

  // // menu click about
  // $("#load_about").on("click", function () {
  //   // $(".content").load("assets/html/about.html");
  //   $(".hamburger").toggleClass("is-active");
  //   $(".menu").toggleClass("active");
  //   $(".body").toggleClass("overflow");
  // });

  // // menu click contact
  // $("#load_contact").on("click", function () {
  //   // $(".content").load("assets/html/contact.html");
  //   $(".hamburger").toggleClass("is-active");
  //   $(".menu").toggleClass("active");
  //   $(".body").toggleClass("overflow");
  // });

  // // menu click imprint
  // $("#load_imprint").on("click", function () {
  //   // $(".content").load("assets/html/imprint.html");
  //   $(".hamburger").toggleClass("is-active");
  //   $(".menu").toggleClass("active");
  //   $(".body").toggleClass("overflow");
  // });

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
