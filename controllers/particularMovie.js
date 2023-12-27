app.controller('particularMovieCtrl', ["$scope", "particularMovieService", function (sc, particularMovieService) {
    sc.url1 = "https://image.tmdb.org/t/p/original"
    sc.receivedData = particularMovieService.getSharedData();
    
  

}]);