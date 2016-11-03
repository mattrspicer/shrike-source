var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('patent_controller', function($scope, $location) {
    
  $scope.go = function ( path ) {
    $location.path( path );
  };

});