/*global homeModule*/
customDirectives.controller('dropdownNavMenu.controller', function($scope, $mdMenu) {

  $scope.productStyle = {
    "width": "100%",
    "font-family": "'PT Sans'",
    "font-size": "20px",
    "background-color": "#222222",
    "color": "white",
    "height": "45px",
  }
  
  $scope.higlightProduct = function() {
    $scope.productStyle["background-color"] = "#68160D";
  }

  $scope.lowlightProduct = function() {
    $scope.productStyle["background-color"] = "#222222";
  }

  $scope.openProductMenu = function($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
    $scope.higlightProduct();
    $scope.$on('$mdMenuClose', $scope.lowlightProduct);
  }

  $scope.closeProductMenu = function() {
    $mdMenu.hide();
    $scope.lowlightProduct();
  }

  $scope.checkToCloseProductMenu = function(ev) {
    console.log("TEST");
    
    var triggerButton = document.getElementById($scope.trigger).getBoundingClientRect();
    var menuContent = document.getElementById($scope.menu).getBoundingClientRect();

    if ((ev.y <= triggerButton.top) ||
      ((ev.y >= triggerButton.top && ev.y <= menuContent.top) && ev.x <= triggerButton.left) ||
      (ev.x >= triggerButton.right) || (ev.x >= menuContent.right) ||
      ((ev.y >= menuContent.top && ev.y <= menuContent.bottom) && ev.x <= menuContent.left) ||
      (ev.y <= menuContent.top && ev.x <= triggerButton.left) ||
      (ev.y >= menuContent.bottom)) {
      $scope.closeProductMenu();
    }
  }

});

/* dropdown nav directive */
customDirectives.directive('dropdownNavMenu', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/dropdown-nav-menu.html',
    scope: {
      items: '=',
      trigger: '=',
      menu: '='
    },
    controller: "dropdownNavMenu.controller"
  }
});