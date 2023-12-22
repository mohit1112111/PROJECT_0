
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
    // .when("/favourite", {
    //   templateUrl: "favourite.html",
    //   controller: "favouriteCtrl",
    // })
    .when("/register", {
      templateUrl: "register.html",
      controller: "registerCtrl",
    })
    .when("/login", {
      templateUrl: "login.html",
      controller: "loginCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
});
