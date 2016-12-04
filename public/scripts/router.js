var shrikeApp = angular.module('shrike-app');

// angular router - this code establishes the routing for the site
shrikeApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './templates/home.html'
        })
        .when('/about', {
            templateUrl: './templates/about.html'
        })
        .when('/contact', {
            templateUrl: './templates/contact.html'
        })
        .when('/product', {
            templateUrl: './templates/product.html'
        })
        // .when('/purchase', {
        //     templateUrl: './templates/purchase.html'
        // })
        .when('/patents', {
            templateUrl: './templates/patents.html'
        })
        .when('/test', {
            templateUrl: './templates/google_sheets_test_auth.html'
        })
        .otherwise({
            redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);
});