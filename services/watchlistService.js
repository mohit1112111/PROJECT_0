app.service("watchlistService", function ($http, $window, $location) {
  // Redirect: To movies page
  this.goTomovies = function () {
    $location.path("/movies");
  };

  // Redirect: To login page
  this.goToLogin = function () {
    $location.path("/login");
  };

  // Redirect: To particular movie page
  this.goToParticularMovie = function () {
    $location.path("/particularMovie");
  };

  // Delete movies from watchlist.
  this.deletewatchlistmovies = function (moviesId) {
    $http({
      method: "DELETE",
      url: `http://localhost:3000/watchlist/${moviesId}`,
    }).then(
      function (response) {
        console.log("Delete watchlist movies - response: ", response);
      },
      function (error) {
        console.log("Delete watchlist movies - Error: ", error);
      }
    );
  };

  // Fetch all watchlist movies.
  this.getAllwatchlistmovies = function (getDataFun) {
    $http({
      method: "GET",
      url: `http://localhost:3000/watchlist`,
    }).then(
      function (response) {
        getDataFun(response.data);
      },
      function (error) {
        console.log("Get All watchlist Universities - Error: ", error);
      }
    );
  };
});
