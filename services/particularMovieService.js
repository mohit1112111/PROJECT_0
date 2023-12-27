app.service('particularMovieService', function ($http, $window, $location) {
    let sharedData;
   

    return {
        setSharedData: function (data) {
            sharedData = data;
            console.log(sharedData.poster_path)
        },
        getSharedData: function () {
            // console.log(sharedData)
            return sharedData;
        },
        getMovieVideos : function(movieId) {
            const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=974dff81c8800d9dac708b4882d8cbb5`;
            return $http.get(url);
        }
    };

   
});