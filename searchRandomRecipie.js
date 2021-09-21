myApp.controller("SearchRe", ['$scope', 'searchFactory', function ($scope, searchFactory) {
  $scope.reci = [];
  $scope.respdata = function () {
    $scope.reci = searchFactory.searchRecipie({
      method: "GET",
      url: "https://random-recipes.p.rapidapi.com/ai-quotes/1",
      headers: {
        "x-rapidapi-host": "random-recipes.p.rapidapi.com",
        "x-rapidapi-key": "505761f37fmsh42d69b7ec9f5095p13171cjsnd2198230aaf0",
      },
    });
  };
}]);


myApp.factory("searchFactory", function ($http) {
  var searchRecipie = function(options) {
    $http(options).then(function(response) {
      return response.data;
    })
  }
});