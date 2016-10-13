/*global angular*/

var customDirectives = angular.module('customDirectives', ['ngAnimate', 'ngMaterial']);

var shrikeApp = angular.module('shrike-app', ['customDirectives', 'ngAnimate', 'ngMaterial', 'ngSanitize', 'ui.bootstrap', 'ngRoute']);

shrikeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './templates/overview.html'
        })
        .when('/about', {
            templateUrl: './templates/about.html'
        })
        .when('/contact', {
            templateUrl: './templates/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

shrikeApp.controller('product_controller', function($scope) {
    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

});

shrikeApp.controller('about_controller', function($scope, $mdMenu) {

});

shrikeApp.controller('contact_controller', function($scope, $mdMenu, $http, $window) {
    
    
    $scope.submit = function() {
        var post_user = $http({
            method: "post",
            url: './trialusers',
            data: {
                email: $scope.user.email,
                name: $scope.user.name,
                updateInterest: false,
                purchaseInterest: false
            }
        }).then(function successCallback(response) {
            $window.location.reload();
        }, function errorCallback(response) {
            console.log("HTTP POST FAILED");
        });
    };
});