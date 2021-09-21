/// <reference path="Angular.js" />

var myApp = angular.module("RandomRecipie", []);
myApp.controller("Random", function ($scope, $http, $log) {
  $scope.recipie = [];
  $scope.search = function () {
    $http(options).then(
      function (response) {
        $scope.recipie = response.data;
      },
      function (error) {
        $log.info(error);
      }
    );
  };
});




var options = {
  method: "GET",
  url: "https://random-recipes.p.rapidapi.com/ai-quotes/1",
  headers: {
    "x-rapidapi-host": "random-recipes.p.rapidapi.com",
    "x-rapidapi-key": "505761f37fmsh42d69b7ec9f5095p13171cjsnd2198230aaf0",
  },
};
