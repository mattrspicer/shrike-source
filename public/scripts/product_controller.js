var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('product_controller', function($scope) {
    $scope.myInterval = -1;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;
    
    /* User feedback Slides */
    
    $scope.slides = [];
    
    var slide1 = {
        call_out: "THIS IS EXACTLY WHAT I'VE WANTED, BUT HAVE NOT BEEN ABLE TO FIND!",
        thumbnail_path: "../images/Ninja_300.png", 
        rest_of_quote: "I think you have a great idea with your system. I have had my bike for over 3 years, and I have needed a way to carry cargo but didn't want to strap anything to my bike.",
        rider_name: "IndyRider", 
        bike_name: "Ninja 300"
        
    };
    $scope.slides.push(slide1);
    
    var slide2 = {
        call_out: "IT WAS GREAT HAVING A PLACE TO PUT A BOTTLE OF WATER!",
        thumbnail_path: "../images/GSX750.png", 
        rest_of_quote: "I rode almost 100 miles today and didn't encounter any issues with the system. I had a couple of coworkers yesterday comment on how good the bags look on my bike.",
        rider_name: "Jamie", 
        bike_name: "GSXR750"
        
    };
    $scope.slides.push(slide2);
    
    var slide3 = {
        call_out: "INSTALLATION WAS AN ABSOLUTE BREEZE.",
        thumbnail_path: "../images/Ninja_300.png", 
        rest_of_quote: "I've been riding with them all week and finding reasons to carry additional stuff on my daily commute. So far, I absolutely love the set up. It’s very clean from a side and rear profile view as well as the size and storing capability.",
        rider_name: "Chase", 
        bike_name: "GSXR750"
        
    };
    $scope.slides.push(slide3);

});