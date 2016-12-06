var shrikeApp = angular.module('shrike-app');

shrikeApp.controller('product_controller', function($scope) {
    
    // variables to control the carousel at the top of the page
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;
    
    /* USER FEEDBACK SLIDES */
    
    $scope.slides = [];
    
    var slide1 = {
        quote: "IT WAS GREAT HAVING \n A PLACE TO PUT A BOTTLE \n OF WATER",
        default_image_path: "../images/gallery/OEIP_Spin-In-Motorcycle-012 default.jpg", 
        high_res_image_path: "../images/gallery/OEIP_Spin-In-Motorcycle-012.jpg",
        rider_name: "IndyRider \n Ninja 300" 
    };
    $scope.slides.push(slide1);
    
    var slide2 = {
        quote: "INSTALLATION WAS AN \n ABSOLUTE BREEZE.",
        default_image_path: "../images/gallery/OEIP_Spin-In-Motorcycle-028 default.jpg", 
        high_res_image_path: "../images/gallery/OEIP_Spin-In-Motorcycle-028.jpg",
        rider_name: "Chase \n GSXR750" 
    };
    $scope.slides.push(slide2);
    
    var slide3 = {
        quote: "THIS IS EXACTLY WHAT \n I'VE WANTED, BUT HAVE NOT \n BEEN ABLE TO FIND!",
        default_image_path: "../images/gallery/OEIP_Spin-In-Motorcycle-016 default.jpg", 
        high_res_image_path: "../images/gallery/OEIP_Spin-In-Motorcycle-016.jpg",
        rider_name: "Jamie \n GSXR750"
    };
    $scope.slides.push(slide3);
    
});