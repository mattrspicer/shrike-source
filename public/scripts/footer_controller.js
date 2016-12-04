var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('footer_controller', function($scope, $location, $window) {
    
    // changes the url to redirect the user to the correct page, called when one of the footer buttons is pressed
    $scope.go = function(path) {
        $location.path(path);
        $window.scrollTo(0, 0);
    };
});