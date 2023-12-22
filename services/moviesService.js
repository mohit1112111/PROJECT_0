app.service("moviesService", function ($http, $window, $location) {
  // Redirect: To login page
  this.goToLogin = function () {
    $location.path("/login");
  };


  
  // Fetch all  movies data
  this.getAllMovies = function (sendData) {
    $http({
      method: "GET",
      url: 'https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&certification_country=INDIA&include_adult=false&include_video=false&language=en-IN&page=1&region=IN&sort_by=popularity.desc&watch_region=IN&with_origin_country=IN',
    }).then((responce) => {
      // console.log(responce)
      // console.log(responce.data.results)
      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }
  // Fetch all  movies based on years
  this.getYearsMovies = function (year,sendData) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_video=false&language=en-IN&page=1&region=IN&sort_by=popularity.desc&watch_region=IN&with_origin_country=IN&year=${year}`,
    }).then((responce) => {
      // console.log(responce)
      // console.log(responce.data.results)
      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }
  // Fetch all hollywood and bollywood movies based on years
  this.getTypesMovies = function (type,sendData) {
    $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_video=true&language=en-IN&page=1&region=${type}&sort_by=popularity.desc&watch_region=${type}&with_origin_country=${type}`,
    }).then((responce) => {
      // console.log(responce)
      // console.log(responce.data.results)
      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }

  // Fetch all trending movies data
  this.getAllTrendingMovies = function (sendData) {
    $http({
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/day?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US",
    }).then((responce) => {
      // console.log(responce)
      // console.log(responce.data.results)
      sendData(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }



  // Fetch trending movies using buttons
  this.getTrendingMovies = function (type, duration, sendfunc) {
    $http({
      method: "GET",
      // url: "https://api.themoviedb.org/3/discover/movie?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_video=false&language=en-US&page=10&sort_by=popularity.desc"
      url: `https://api.themoviedb.org/3/trending/${type}/${duration}?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US`,

    }).then((responce) => {
      // console.log(responce)
      // console.log(responce.data.results)
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }
  // Fetch Now Playing movies 
  this.getNowplayingMovies = function (sendfunc) {
    $http({
      method: "GET",
      url:"https://api.themoviedb.org/3/movie/now_playing?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US&page=1",

    }).then((responce) => {
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }
  // Fetch Upcoming movies 
  this.getUpcomingMovies = function (sendfunc) {
    $http({
      method: "GET",
      url:'https://api.themoviedb.org/3/movie/upcoming?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US&include_adult=false&page=1',

    }).then((responce) => {
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }


  // Fetch Popular Playing movies 
  this.getpopulargMovies = function (sendfunc) {
    $http({
      method: "GET",
      url:"https://api.themoviedb.org/3/movie/popular?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US&page=1&region=India",

    }).then((responce) => {
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }


  // Fetch Top rated Playing movies 
  this.getTopRatedgMovies = function (sendfunc) {
    $http({
      method: "GET",
      url:`https://api.themoviedb.org/3/movie/top_rated?api_key=974dff81c8800d9dac708b4882d8cbb5&language=en-US&page=1&region=India`,

    }).then((responce) => {
      // console.log(responce)
      // console.log(responce.data.results)
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }
  // Fetch Tv shows
  this.getAllTvShows = function (sendfunc) {
    $http({
      method: "GET",
      url:'https://api.themoviedb.org/3/discover/tv?api_key=974dff81c8800d9dac708b4882d8cbb5&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',

    }).then((responce) => {
      console.log(responce)
      console.log(responce.data.results)
      sendfunc(responce.data.results);
    }).catch((error) => {
      console.log("Get University Data - Error: ", error);
    })
  }

});

