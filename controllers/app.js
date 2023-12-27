
var app = angular.module("app", ["ngRoute"]);
// Router
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "homeCtrl",
    })
    .when("/movies", {
      templateUrl: "movies.html",
      controller: "moviesCtrl",
    })
    .when("/particularMovie", {
      templateUrl: "particularMovie.html",
      controller: "particularMovieCtrl",
    })
    .when("/watchlist", {
      templateUrl: "watchlist.html",
      controller: "watchlistCtrl",
    })
    .when("/register", {
      templateUrl: "register.html",
      controller: "registerCtrl",
    })
    .when("/login", {
      templateUrl: "login.html",
      controller: "loginCtrl",
    })
    .when("/pageNotFound", {
      templateUrl: "pageNotFound.html",
      // controller: "loginCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
});
