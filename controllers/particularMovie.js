app.controller('particularMovieCtrl', ["$scope", "particularMovieService", function (sc, particularMovieService) {
    sc.url1 = "https://image.tmdb.org/t/p/original"
    sc.receivedData = particularMovieService.getSharedData();


    sc.fetchTrailer = function (movieId) {
        console.log(movieId);
        sc.movieId=movieId;
        particularMovieService.getMovieVideos(sc.movieId)
            .then(function (response) {
                const videos = response.data.results;
                if (videos && videos.length > 0) {
                    // Assuming the first video in the results is the trailer
                    const trailerKey = videos[0].key;
                    sc.trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
                    console.log(sc.trailerUrl)
                } else {
                    $scope.trailerUrl = null;
                }
            })
            .catch(function (error) {
                console.error('Error fetching trailer:', error);
                $scope.trailerUrl = null;
            });

    }


}]);