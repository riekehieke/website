"use strict"

// on page load start.html
$(document).ready(function () {
  $(".content").load("assets/html/start.html");
});

// hamburger menu active
$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    console.log('hamburger active');
    $(".menu").toggleClass("active");
    console.log('menu active');
    $(".body").toggleClass("overflow");
  });
});
// load home on name click
$(document).ready(function () {
  $("#load_home").on("click", function () {
    $(".content").load("assets/html/start.html");
  })
});
// menu click work
$(document).ready(function () {
  $("#load_start").on("click", function () {
    $(".content").load("assets/html/start.html");
    console.log('projects');
    $(".hamburger").toggleClass("is-active");
    console.log('hamburger active');
    $(".menu").toggleClass("active");
    console.log('menu active');
    $(".body").toggleClass("overflow");
  });
});

// menu click about
$(document).ready(function () {
  $("#load_about").on("click", function () {
    $(".content").load("assets/html/about.html");
    console.log('about');
    $(".hamburger").toggleClass("is-active");
    console.log('hamburger active');
    $(".menu").toggleClass("active");
    console.log('menu active');
    $(".body").toggleClass("overflow");
  });
});

// menu click cv
$(document).ready(function () {
  $("#load_cv").on("click", function () {
    $(".content").load("assets/html/cv.html");
    console.log('cv');
    $(".hamburger").toggleClass("is-active");
    console.log('hamburger active');
    $(".menu").toggleClass("active");
    console.log('menu active');
    $(".body").toggleClass("overflow");
  });
});

// menu click contact
$(document).ready(function () {
  $("#load_contact").on("click", function () {
    $(".content").load("assets/html/contact.html");
    console.log('cv');
    $(".hamburger").toggleClass("is-active");
    console.log('hamburger active');
    $(".menu").toggleClass("active");
    console.log('menu active');
    $(".body").toggleClass("overflow");
  });
});

// menu click imprint
$(document).ready(function () {
  $("#load_imprint").on("click", function () {
    $(".content").load("assets/html/imprint.html");
    console.log('cv');
    $(".hamburger").toggleClass("is-active");
    console.log('hamburger active');
    $(".menu").toggleClass("active");
    console.log('menu active');
    $(".body").toggleClass("overflow");
  });
});

// on click load projects
$(document).ready(function () {
  $(".content").on("click", "#pr1", function () {
    $(".content").load("assets/projects/time.html");
  });
  $(".content").on("click", "#pr2", function () {
    $(".content").load("assets/projects/typro.html");
  });
  $(".content").on("click", "#pr3", function () {
    $(".content").load("assets/projects/marketing.html");
  });
  $(".content").on("click", "#pr4", function () {
    $(".content").load("assets/projects/bewerbung.html");
  });
  $(".content").on("click", "#pr5", function () {
    $(".content").load("assets/projects/rh.html");
  });
  $(".content").on("click", "#pr6", function () {
    $(".content").load("assets/projects/sternenhimmel.html");
  });
  $(".content").on("click", "#pr7", function () {
    $(".content").load("assets/projects/circular.html");
  });
  $(".content").on("click", "#pr8", function () {
    $(".content").load("assets/projects/abstract.html");
  });
  $(".content").on("click", "#pr9", function () {
    $(".content").load("assets/projects/posters.html");
  });
  $(".content").on("click", "#pr10", function () {
    $(".content").load("assets/projects/photography.html");
  });
});



// lightbox overflow toggle
$(document).ready(function () {
  $(".content").on("click", ".img", function (e) {
    $('#' + e.target.id + '-l').toggleClass("light-active");
    console.log(e.target.id + '-l');
    $(".body").toggleClass("overflow");
  });
  $(".content").on("click", ".img_last", function (e) {
    $('#' + e.target.id + '-l').toggleClass("light-active");
    console.log(e.target.id + '-l');
    $(".body").toggleClass("overflow");
  });
  $(".content").on("click", ".hochformat", function (e) {
    $('#' + e.target.id + '-l').toggleClass("light-active");
    console.log(e.target.id + '-l');
    $(".body").toggleClass("overflow");
  });
  $(".content").on("click", ".hochformat_last", function (e) {
    $('#' + e.target.id + '-l').toggleClass("light-active");
    console.log(e.target.id + '-l');
    $(".body").toggleClass("overflow");
  });
  $(".content").on("click", ".lightbox", function () {
    $(".body").toggleClass("overflow");
    $(".lightbox").toggleClass("light-active");
  });
});

//old stuff


// var hamburger = document.querySelector(".hamburger");
// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("is-active");
//   var menu = document.querySelector(".menu");
//   menu.classList.toggle("active");
//   var overflow = document.querySelector("body");
//   overflow.classList.toggle("overflow");
// });

// var img = document.querySelector(".img");
// img.addEventListener("click", function () {
//   var scrolling = document.querySelector("body");
//   scrolling.classList.toggle("overflow");
// });

// var lightbox = document.querySelector(".lightbox");
// lightbox.addEventListener("click", function () {
//   var body = document.querySelector("body");
//   body.classList.toggle("overflow");
// });
