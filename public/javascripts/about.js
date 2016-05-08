/*global angular*/

var customDirectives = angular.module('customDirectives', ['ngAnimate', 'ngMaterial']);
var aboutModule = angular.module('about', ['customDirectives','ngAnimate', 'ngMaterial']);
aboutModule.controller('about_controller', function($scope, $mdMenu, $window) {
    
    $scope.toAbout = function() {
        
    }
    
});