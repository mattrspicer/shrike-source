customDirectives.controller('shrike-header.controller', function($scope, $mdMenu, $location, $window) {

  // changes the url to redirect the user to the correct page
  $scope.go = function(path) {
    $location.path(path);
  };

  // sends the user to the shrike mounts purchase form
  $scope.toPurchaseForm = function() {
    $window.open("https://docs.google.com/forms/d/e/1FAIpQLSf9svL8Luzsl9Q12g8xQQSf1j4uoTyU_7o89AQly_FD_pXnfA/viewform");
  }

});

// declares the shrike mounts header custom directive
customDirectives.directive('shrikeHeader', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/shrike-header.html',
    scope: {

    },
    controller: "shrike-header.controller"
  }
});