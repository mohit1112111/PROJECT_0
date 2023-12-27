app.controller("moviesCtrl", [
  "$scope",
  "moviesService",
  "$window",
  "particularMovieService",
  "$location",
  function (sc, moviesService, $window, particularMovieService,$location) {
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
    // Hendling Search bar for searching movies
    sc.Results = "";
    sc.performSearch = function () {
      sc.searchQuery = document.getElementById('searchInput').value;
      // Perform your search functionality here using 'searchQuery'
      console.log('Search Query:', sc.searchQuery);
      // Example: You can use an API call or custom search logic here
      moviesService.getAllQuriedMovies(sc.searchQuery, function (data) {
        sc.allSearchedMovies = data;
        console.log(sc.allSearchedMovies.length)
        if (sc.allSearchedMovies.length !== 0) {

          sc.Results = "Your Results"
        } else {
          sc.Results = "No Results Found"
          $location.path("/pageNotFound");
          
        }
      })
    };
    // Capture Enter key press event and trigger search
    document.getElementById('searchInput').addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        document.getElementById('searchInput').blur(); // Remove focus from input
        angular.element(document.getElementById('searchInput')).scope().performSearch();
        document.getElementById('searchInput').value = "";
        sc.showSearchContainer = true;
      } else {
        sc.showSearchContainer = false;
      }
    })

    // Hendling the All movies data
    moviesService.getAllMovies(function (data) {
      sc.allMovies = data;

    })
      ;

    // Hendling the movies sorting yearwise

    sc.yearsContainer = [{ year: 2000 }, { year: 2001 }, { year: 2002 }, { year: 2003 }, { year: 2004 }, { year: 2005 }, { year: 2006 },
    { year: 2007 }, { year: 2008 }, { year: 2009 }, { year: 2010 }, { year: 2011 }, { year: 2012 }, { year: 2013 }, { year: 2014 }, { year: 2015 }, { year: 2016 },
    { year: 2017 }, { year: 2018 }, { year: 2019 }, { year: 2020 }, { year: 2021 }, { year: 2022 }, { year: 2023 }
    ];

    sc.Useryear = "";
    sc.filterYearMovies = function () {
      sc.Useryear = sc.selectedYear;
      moviesService.getYearsMovies(sc.Useryear, function (data) {
        sc.allMovies = data;
      })
    }

    // Hendling hollywood and bollywood movies
    sc.moviesType = "";
    sc.filterTypeMovies = function () {
      sc.moviesType = sc.selectedMovieType;
      moviesService.getTypesMovies(sc.moviesType, function (data) {
        sc.allMovies = data;
      })
    }


    // Hendling movies countries wise movies
    sc.popularCountries = [
      { country: 'United States', code: 'US' },
      { country: 'China', code: 'CN' },
      { country: 'India', code: 'IN' },
      { country: 'United Kingdom', code: 'GB' },
      { country: 'France', code: 'FR' },
      { country: 'Germany', code: 'DE' },
      { country: 'Japan', code: 'JP' },
      { country: 'Italy', code: 'IT' },
      { country: 'Spain', code: 'ES' },
      { country: 'Canada', code: 'CA' },
    ];


    sc.filterCountryMovies = function () {
      sc.country = sc.selectedCountry;
      moviesService.getCountryMovies(sc.country, function (data) {
        sc.allMovies = data;
      })
    }

    // Hendling movies geners
    sc.genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" }
    ];
    sc.hendleGeneresMovies = function () {
      sc.genersId = sc.genreId;
      moviesService.getGeneresMovies(sc.genersId, function (data) {
        sc.allMovies = data;
      })

    }

    // Sort Movies Hendling
    sc.sortMovies = [
      { type: "Popular", access: "popularity.desc" },
      { type: "Release Date", access: "primary_release_date.desc" },
      { type: "Revenue", access: "revenue.desc" },
      { type: "Votes", access: "vote_average.desc" },
      { type: "Total Votes", access: "vote_count.desc" },
      { type: "Top Rated", access: "top_rated" },
    ];
    sc.hendleSortMovies = function () {
      sc.sortTypeVar = sc.sortType;
      moviesService.getSortMovies(sc.sortTypeVar, function (data) {
        sc.allMovies = data;
      })
    }
    // Hendling the trending movies data
    moviesService.getAllTrendingMovies(function (data) {
      sc.trendingMovies = data;

    })


    // Hendling trending data based on user
    sc.getTrending = function (type, duration) {
      moviesService.getTrendingMovies(type, duration, function (data) {
        sc.trendingMovies = data;

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
    // Hendling particular movie data on click

    sc.handleOnClick = function (movie) {
      sc.selectedMovie = movie;
      // console.log( sc.selectedMovie)
      particularMovieService.setSharedData(sc.selectedMovie);
      // Redirect to particular movie page
      moviesService.goToParticularMovie();
    };


    sc.toggle = "Add to watchlist"
    // Add movie as watchlist.
    sc.toggleWatchList = function (movie) {
      // console.log(movie);
      // If the movie is already in favourite - Don't add in favourite.
      moviesService.isMovieWatchlist(function (data) {
        sc.isCheckarr = data.filter((data) => {
          return (
            data.userEmail === JSON.parse(checkAuth).email &&
            data.id === movie.id
          );
        });
        console.log(sc.isCheckarr)

        if (sc.isCheckarr.length) {
          // sc.toggle = "Already Watchlisted" 
          alert("Already added to favourite.");
          return;
        } else {
          movie.userEmail = JSON.parse(checkAuth).email;
          moviesService.addTowatchlist(movie);
          alert("Added to Favourite.");
        }
      });
    };


    // Function to handle watch list movies
    sc.handleWatchList = function () {
      moviesService.goToWatchlist();
    };




  },
]);
