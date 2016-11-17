var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('footer_controller', function($scope, $location, $window) {
    $scope.go = function(path) {
        $location.path(path);
        $window.scrollTo(0, 0);
    };
});