app.controller("moviesCtrl", [
  "$scope",
  "moviesService",
  "$window",
  function (sc, moviesService, $window) {
    // Check if user login or not.
    var checkAuth = $window.localStorage.getItem("user");
    if (!checkAuth) {
      // Redirect: To login page. If the user not logged-in.
      moviesService.goToLogin();
    }

    // User Email
    sc.userEmail = JSON.parse(checkAuth).email;



    // Logout
    sc.handleLogout = function () {
      $window.localStorage.removeItem("user");
      moviesService.goToLogin();
    };


    sc.url1 = "https://image.tmdb.org/t/p/original"

    // Hendling the All movies data
    moviesService.getAllMovies(function (data) {
      sc.allMovies = data;

      // console.log(data)
      // console.log(sc.url1 + (data[0].poster_path))
    })

    // Hendling the movies sorting yearwise

    sc.yearsContainer = [{ year: 2000 }, { year: 2001 }, { year: 2002 }, { year: 2003 }, { year: 2004 }, { year: 2005 },
    { year: 2006 },
    { year: 2007 },
    { year: 2008 },
    { year: 2009 },
    { year: 2010 },
    { year: 2011 },
    { year: 2012 },
    { year: 2013 },
    { year: 2014 },
    { year: 2015 },
    { year: 2016 },
    { year: 2017 },
    { year: 2018 },
    { year: 2019 },
    { year: 2020 },
    { year: 2021 },
    { year: 2022 },
    { year: 2023 }
    ];

    sc.Useryear ="";
    sc.filterYearMovies = function(){
        sc.Useryear = sc.selectedYear;
        moviesService.getYearsMovies(sc.Useryear,function(data){
          sc.allMovies = data;
        })
    }

    // Hendling hollywood and bollywood movies
    sc.moviesType ="";
    sc.filterTypeMovies = function(){
        sc.moviesType = sc.selectedMovieType;
        moviesService.getTypesMovies(sc.moviesType,function(data){
          sc.allMovies = data;
        })
    }

    // Hendling the trending movies data
    moviesService.getAllTrendingMovies(function (data) {
      sc.trendingMovies = data;

      // console.log(data)
      // console.log(sc.url1 + (data[0].poster_path))
    })


    // Hendling trending data based on user
    sc.getTrending = function (type, duration) {
      moviesService.getTrendingMovies(type, duration, function (data) {
        sc.trendingMovies = data;
        // console.log(sc.trendingMovies)
      })
    }

    //Hendling Now Playing Movies
    moviesService.getNowplayingMovies(function (data) {
      sc.nowplayingMovies = data;
    })


    //Hendling Up coming Movies
    moviesService.getUpcomingMovies(function (data) {
      sc.upComingMovies = data;
    })


    //Hendling Popular Movies
    moviesService.getpopulargMovies(function (data) {
      sc.popularMovies = data;
    })


    //Hendling Top Rated Movies
    moviesService.getTopRatedgMovies(function (data) {
      sc.topRatedMovies = data;
    })
    //Hendling Tv shows
    moviesService.getAllTvShows(function (data) {
      sc.tvShows = data;
    })

  },
]);
