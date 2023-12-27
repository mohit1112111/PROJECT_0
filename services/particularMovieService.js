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
        }
    };
});