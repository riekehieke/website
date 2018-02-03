"use strict"

function loadPage(page, mode) {
  console.log(`Seite: ${page} Mode: ${mode}`)
  if (mode === 'html') {
    $(".content").load("assets/html/" + page + ".html");
    $(".hamburger").removeClass("is-active");
    $(".menu").removeClass("active");
    $(".body").removeClass("overflow");
  } else {
    $(".content").load("assets/projects/" + page + ".html");
  }
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
  push: function (path, pushState = true) {
    var page, mode;
    if (path.includes('?')) {
      mode = 'projects';
      page = router.getProject(path);
    }
    else {
      mode = 'html';
      page = router.match(path);
    }
    loadPage(page, mode);
    if (pushState) { history.pushState({ page: path }, title, path); }
    var title = page === 'start' ? 'rieke helmers' : page;
    $('title').text(title);
  },
  init: function () {
    window.addEventListener('popstate', function (url) {
      router.push(url.state.page, false);
    });
    router.push((window.location.pathname.replace('.html', '') + window.location.search));
  },
  match: function (matchPath) {
    return routes.reduce(function (a, b) {
      if (b.path === matchPath) return b.page
      else return a
    }, '404');
  },
  getProject: function (query) {
    var query = query === 'undefined' ? window.location.search : query;
    var query2 = query.split('?')[1];
    var query3 = query2.split('=');
    return query3[1];
  }
}