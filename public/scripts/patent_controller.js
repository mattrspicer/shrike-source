var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('patent_controller', function($scope, $location) {
    
  // changes the url to redirect the user to the correct page
  $scope.go = function (path) {
    $location.path( path );
  };

});