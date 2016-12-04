var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('contact_controller', function($scope, $mdMenu, $http, $window, $httpParamSerializerJQLike) {

    $scope.loading = false;

    // google sheets update was successful
    function success(response) {
        console.log(response);
        $scope.user.email = "";
        $scope.user.name = "";
        toastr.success("Thank you for your interest in our product!");
        $scope.loading = false;
    };

    // google sheets update failed
    function fail(e) {
        toastr.error("Error: unable to process request");
        console.log("error");
        console.log(e);
        $scope.loading = false;
    };

    // validates email address
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // called when the user submit contact information - checks that they have validly filled out both fields and updates google sheet
    $scope.submit = function() {
        if (typeof $scope.user != 'undefined' && $scope.user.email != "" && $scope.user.user != "") {
            if (validateEmail($scope.user.email)) {
                var data = $httpParamSerializerJQLike({
                    name: $scope.user.name,
                    email: $scope.user.email
                });
                var config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
                var destination = 'https://script.google.com/macros/s/AKfycbx66PacR2gXE_b9aHX9yI7pQ9-CS5QVYp6cJkSSxEa4Js7fCDMJ/exec?callback=JSON_CALLBACK';
                destination = destination + '&name=' + $scope.user.name + '&email=' + $scope.user.email;
                $scope.loading = true;
                $http.jsonp(destination).then(success, fail);
            }
            else {
                toastr.error("Please enter a valid email address i.e. test@site.domain");
            }
        }
        else {
            toastr.error("Please enter your name & email address");
        }
    };
});