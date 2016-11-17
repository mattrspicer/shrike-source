var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('contact_controller', function($scope, $mdMenu, $http, $window) {
    
    $scope.submit = function() {
        var post_user = $http({
            method: "post",
            url: 'https://script.google.com/macros/s/AKfycbx8L88dArKdzYMYazrhx82qA2s4mTzj4vqqJzH8BPzrzJoZZlj3/exec',
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