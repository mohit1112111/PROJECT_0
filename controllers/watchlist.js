app.controller("watchlistCtrl", [
  "$scope",
  "watchlistService",
  "$window",
  "particularMovieService",
  function (sc, watchlistService, $window,particularMovieService) {
    // Check if user login or not.
    var checkAuth = $window.localStorage.getItem("user");
    if (!checkAuth) {
      // Redirect: To login page. If user not logged-in.
      watchlistService.goToLogin();
    }

    // Redirect: To movies page
    sc.backTomoviesPage = function () {
      watchlistService.goTomovies();
    };



    // Redirect: To particular movies page
    sc.handleOnClick = function (movie) {
      sc.selectedMovie = movie;
      // console.log( sc.selectedMovie)
      particularMovieService.setSharedData(sc.selectedMovie);
      // Redirect to particular movie page
      watchlistService.goToParticularMovie();
    };

    // Delete watchlist movies.
    sc.handleRemoveMovie = function (movie) {
      watchlistService.deletewatchlistmovies(movie.id);
    };

    // Fetch all watchlist movies.
    sc.url1 = "https://image.tmdb.org/t/p/original"
    watchlistService.getAllwatchlistmovies(function (data) {
      sc.watchListMovies = data.filter((data) => {
        return data.userEmail === JSON.parse(checkAuth).email;
      });
      console.log(sc.watchListMovies)
    });
  },
]);
