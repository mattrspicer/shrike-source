customDirectives.controller('shrike-header.controller', function($scope, $mdMenu, $location) {
    
  $scope.go = function ( path ) {
    $location.path( path );
  };
    
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