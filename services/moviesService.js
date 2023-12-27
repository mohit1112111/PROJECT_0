app.service("moviesService", function ($http, $window, $location) {
  // Redirect: To login page
  this.goToLogin = function () {
    $location.path("/login");
  };
  // Redirect: To particular movie page
  this.goToParticularMovie = function () {
    $location.path("/particularMovie");
  };
  // Redirect: To watch list page
  this.goToWatchlist = function () {
    $location.path("/watchlist");
  };


  // Fetch all favourite movies.
  this.isMovieWatchlist = function (watchlistFun) {
    $http({
      method: "GET",
      url: `http://localhost:3000/watchlist`,
    }).then(function (response) {
      watchlistFun(response.data);
    }, function (error) {
      console.log("Is movies watchlist - Error: ", error);
    });
  }
  // Add to watchlist
  this.addTowatchlist = function (movieData) {
    $http({
      method: "POST",
      url: `http://localhost:3000/watchlist`,
      data: movieData
    }).then(function (response) {
      console.log("Add To movieData - response: ", response);
    }, function (error) {
      console.log("Add To movieData - Error: ", error);
    });
  }

  // Fetch movies by search box
  this.getAllQuriedMovies = function (query, sendData) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&api_key=974dff81c8800d9dac708b4882d8cbb5`
    }).then((responce) => {
      sendData(responce.data.results);

    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
    })
  }
  // Fetch all  movies data
  this.getAllMovies = function (sendData) {
    $http({
      method: "GET",
      url: 'https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&certification_country=INDIA&include_adult=false&include_video=false&language=en-IN&page=1&region=IN&sort_by=popularity.desc&watch_region=IN&with_origin_country=IN',
    }).then((responce) => {
      sendData(responce.data.results);

    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
    })
  }
  // Fetch all  movies based on years
  this.getYearsMovies = function (year, sendData) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_video=false&language=en-IN&page=1&region=IN&sort_by=popularity.desc&watch_region=IN&with_origin_country=IN&year=${year}`,
    }).then((responce) => {
      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }
  // Fetch all hollywood and bollywood movies based on years
  this.getTypesMovies = function (type, sendData) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_video=true&language=en-IN&page=1&region=${type}&sort_by=popularity.desc&watch_region=${type}&with_origin_country=${type}`,
    }).then((responce) => {

      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }
  // Fetch all  movies based on countries
  this.getCountryMovies = function (country, sendData) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_video=true&language=en-IN&page=1&region=${country}&sort_by=popularity.desc&watch_region=${country}&with_origin_country=${country}`,
    }).then((responce) => {

      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }
  // Fetch all  movies based on generes
  this.getGeneresMovies = function (genersId, sendData) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&with_genres=${genersId}`,
    }).then((responce) => {

      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }
  // Fetch all  movies based on sorting
  this.getSortMovies = function (sortType, sendData) {
    console.log(sortType)
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_video=true&language=en-US&page=1&sort_by=${sortType}`,
    }).then((responce) => {

      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");

    })
  }
  // Fetch all  movies based on language
  this.getMoviesBasedOnLang = function (languageCode,sendData) {
  
    $http({
      method: "GET",
      url:`https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&language=${languageCode}`,
    }).then((responce) => {

      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");

    })
  }

  // Fetch all trending movies data
  this.getAllTrendingMovies = function (sendData) {
    $http({
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/day?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US",
    }).then((responce) => {

      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }



  // Fetch trending movies using buttons
  this.getTrendingMovies = function (type, duration, sendfunc) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/trending/${type}/${duration}?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US`,

    }).then((responce) => {

      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }
  // Fetch Now Playing movies 
  this.getNowplayingMovies = function (sendfunc) {
    $http({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US&page=1",

    }).then((responce) => {
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }
  // Fetch Upcoming movies 
  this.getUpcomingMovies = function (sendfunc) {
    $http({
      method: "GET",
      url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US&include_adult=false&page=1',

    }).then((responce) => {
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }


  // Fetch Popular Playing movies 
  this.getpopulargMovies = function (sendfunc) {
    $http({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US&page=1&region=India",

    }).then((responce) => {
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }


  // Fetch Top rated Playing movies 
  this.getTopRatedgMovies = function (sendfunc) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US&page=1&region=India`,

    }).then((responce) => {

      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }
  // Fetch Tv shows
  this.getAllTvShows = function (sendfunc) {
    $http({
      method: "GET",
      url: 'https://api.themoviedb.org/3/discover/tv?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',

    }).then((responce) => {
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get Movies Data - Error: ", error);
      $location.path("/pageNotFound");
    })
  }

});

