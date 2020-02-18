var redisApp = angular.module('xssApp', []);
redisApp.controller('mainController', ['$scope', function($scope) {
    $scope.checkForAlert = function(text){
        if(text == "<script>alert(document.cookie)</script>"){
            alert(document.cookie);
        }
    }
}]);