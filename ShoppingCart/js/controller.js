'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}



function mycontroller($scope, UserService) {
    $scope.id = 0;
    $scope.name = "";
    $scope.greeting = function () {
        if (this.name) {
            return "Hello " + this.name+"!";
        }
    };
    $scope.visible = true;
    $scope.toggle = function () { this.visible = !this.visible; };
    $scope.someValue = "";
    $scope.$watch("someValue", function (newValue, old) {
        if (newValue !== old) {
            $scope.changes = "Changed from " + old + " to" + newValue;
        }
    });
    $scope.users = UserService.all();
    $scope.checked = false;
}

function AnotherCtrl($scope, UserService) {
    $scope.firstUser = UserService.first();
}
