customDirectives.controller('shrike-header.controller', function($scope, $mdMenu, $location, $window) {

  // changes the url to redirect the user to the correct page
  $scope.go = function(path) {
    $location.path(path);
  };

  // sends the user to the shrike mounts purchase form
  $scope.toPurchaseForm = function() {
    $window.open("https://goo.gl/forms/UWn9852zTglkFz1l2");
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