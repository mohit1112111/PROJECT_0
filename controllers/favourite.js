app.controller("favouriteCtrl", [
  "$scope",
  "favouriteService",
  "$window",
  function (sc, favouriteService, $window) {
    // Check if user login or not.
    var checkAuth = $window.localStorage.getItem("user");
    if (!checkAuth) {
      // Redirect: To login page. If user not logged-in.
      favouriteService.goToLogin();
    }

    // Redirect: To movies page
    sc.backTomoviesPage = function () {
      favouriteService.goTomovies();
    };

    // Copy the movies name.
    sc.copyClipboard = function (dataToCopy) {
      navigator.clipboard.writeText(dataToCopy);
    };

    // Redirect: To particular movies page
    sc.openmoviesLink = function (linkTo) {
      favouriteService.goToParticularmovies(linkTo);
    };

    // Delete Favourite movies.
    sc.handleRemoveFavClick = function (movies) {
      favouriteService.deleteFavouritemovies(movies.id);
    };

    // Fetch all favourite universities.
    favouriteService.getAllFavouriteUniversities(function (data) {
      sc.favUniversities = data.filter((data) => {
        return data.userEmail === JSON.parse(checkAuth).email;
      });
    });
  },
]);
