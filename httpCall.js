(function(angular) {
    var myApp = angular.module('RandomRecipie', []);
    myApp.controller('Random', ['$scope', function($scope) {
        $scope.search = function() {
            console.log("searching...")
            $http(options).then(function(response) { console.log(response); }, function(error) { console.log(error);})

        }

    }])

})(window.angular);


var options = {
    method: 'GET',
    url: 'https://random-recipes.p.rapidapi.com/ai-quotes/1',
    headers: {
      'x-rapidapi-host': 'random-recipes.p.rapidapi.com',
      'x-rapidapi-key': '505761f37fmsh42d69b7ec9f5095p13171cjsnd2198230aaf0'
    }
  };