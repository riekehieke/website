"use strict";

function loadPage(page, mode, callback) {
  if (mode === "html") {
    $(".content").load("assets/html/" + page + ".html", callback);
    $(".hamburger").removeClass("is-active");
    $(".menu").removeClass("active");
    $("html").removeClass("overflow");
  } else {
    $(".content").load("assets/projects/" + page + ".html", callback);
  }
  window.scrollTo(0, 0);
}

var routes = [
  {
    path: "/",
    page: "start",
  },
  {
    path: "/start",
    page: "start",
  },
  {
    path: "/about",
    page: "about",
  },
  {
    path: "/contact",
    page: "contact",
  },
  {
    path: "/imprint",
    page: "imprint",
  },
];

var router = {
  push: function (path, pushState) {
    pushState = pushState !== false;
    var page, mode;
    if (path.indexOf("?") > -1) {
      mode = "projects";
      page = router.getProject(path);
    } else {
      mode = "html";
      page = router.match(path);
    }
    loadPage(page, mode);
    if (pushState) {
      history.pushState({ page: path }, title, path);
    }
    var title = "rieke helmers";
    $("title").text(title);
  },
  init: function () {
    window.addEventListener("popstate", function (url) {
      router.push(url.state.page, false);
    });
    router.push(
      window.location.pathname.replace(".html", "") + window.location.search
    );
  },
  match: function (matchPath) {
    return routes.reduce(function (a, b) {
      if (b.path === matchPath) return b.page;
      else return a;
    }, "404");
  },
  getProject: function (query) {
    var query = query === "undefined" ? window.location.search : query;
    var query2 = query.split("?")[1];
    var query3 = query2.split("=");
    return query3[1];
  },
};
