// Controller
app.controller('homeCtrl', ['$scope', 'homeService',  function($scope, homeService){

    // Redirect: To register page
    $scope.handleHomeRegisterBtn = function(){
        homeService.goToRegister();
    }
}]);

// Service

app.service('homeService', function($location){

    // Redirect: To register page
    this.goToRegister = () => {
        $location.path('/register');
    }
});