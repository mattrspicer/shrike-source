customDirectives.controller('shrike-header.controller', function($scope, $mdMenu, $window) {
    
    $scope.toAbout = function() {
      $window.location.href = '/views/about.html';
    }
    
    $scope.toProduct = function() {
      $window.location.href = '/views/product.html';
    }
    
    $scope.toGallery = function() {
      $window.location.href = '/views/gallery.html';
    }
    
    $scope.toCart = function() {
      $window.location.href = '/views/cart.html';
    }
    
});

customDirectives.directive('shrikeHeader', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/shrike-header.html',
    scope: {
      
    },
    controller: "shrike-header.controller"
  }
});