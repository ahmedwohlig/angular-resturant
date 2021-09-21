/// <reference path="Angular.js" />

(function(angular) {
    var myApp = angular.module('resturant', []);
    myApp.controller('RestoCon', ['$scope', function($scope) {
        $scope.dishes = [
            {name: "noodels", ingredients: ['noodles', 'soya sauce'], price: 10},
            {name: "momos", ingredients: ['mayo', 'spicy sauce'], price: 12},
        ]
        $scope.name = "new Dish"
        $scope.ingredient = ''
        $scope.ingredients = []
        $scope.price = 0
        $scope.addDishes = function(newDish) {
            $scope.dishes.push(newDish)
            $scope.ingredients = []
        }
        $scope.pushIngredients = function(ingredient) {
            if (ingredient === '') return
            $scope.ingredients.push(ingredient)
                
        }
        $scope.removeLastIngredient = function() {
            $scope.ingredients.pop()
        }
    }])

})(window.angular);