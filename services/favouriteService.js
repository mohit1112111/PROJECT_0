app.service("favouriteService", function ($http, $window, $location) {
  // Redirect: To movies page
  this.goTomovies = function () {
    $location.path("/movies");
  };

  // Redirect: To login page
  this.goToLogin = function () {
    $location.path("/login");
  };

  // Redirect: To particular movies
  this.goToParticularmovies = function (linkTo) {
    $window.open(linkTo, "_blank");
  };

  // Delete movies from favourite.
  this.deleteFavouritemovies = function (moviesId) {
    $http({
      method: "DELETE",
      url: `http://localhost:3001/favourite/${moviesId}`,
    }).then(
      function (response) {
        console.log("Delete Favourite movies - response: ", response);
      },
      function (error) {
        console.log("Delete Favourite movies - Error: ", error);
      }
    );
  };

  // Fetch all favourite movies.
  this.getAllFavouriteUniversities = function (getDataFun) {
    $http({
      method: "GET",
      url: `http://localhost:3001/favourite`,
    }).then(
      function (response) {
        getDataFun(response.data);
      },
      function (error) {
        console.log("Get All Favourite Universities - Error: ", error);
      }
    );
  };
});
