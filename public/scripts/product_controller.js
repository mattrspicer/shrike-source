var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('product_controller', function($scope) {
    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

});