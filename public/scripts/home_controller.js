var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('home_controller', function($scope, $location, $window) {
    
  // changes the url to redirect the user to the correct page
  $scope.go = function ( path ) {
    $location.path( path );
    $window.scrollTo(0, 0);
  };

});