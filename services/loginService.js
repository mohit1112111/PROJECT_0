app.service("loginService", function ($http, $location) {

  // Redirect: To movies page
  this.goTomovies = function () {
    $location.path("/movies");
  };

  // Fetch all the registered users.
  this.getUsers = (any) => {
    $http({
      method: "GET",
      url: "http://localhost:3000/users",
    }).then(
      function (response) {
        any(response.data);
      },
      function (error) {
        console.log("Get Users - Error: ", error);
      }
    );
  };
});
