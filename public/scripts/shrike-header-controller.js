customDirectives.controller('shrike-header.controller', function($scope, $mdMenu, $location, $window) {
    
  $scope.go = function ( path ) {
    $location.path( path );
  };
  
  $scope.toPurchaseForm = function() {
    $window.open("https://goo.gl/forms/UWn9852zTglkFz1l2");
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