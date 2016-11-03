var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('home_controller', function($scope, $location) {
    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    
  $scope.go = function ( path ) {
    $location.path( path );
  };

});