var app = angular.module("myApp",['ngRoute'])

app.controller("NumController", function ($scope ){
    $scope.num = 1;
    $scope.increment = function(){
        $scope.num = $scope.num +1 ;
    }
});


app.config(function($routeProvider){
    $routeProvider.when('/' , { templateUrl : 'home.html'})
    .when("/num" , { templateUrl : "num.html", controller: "NumController"})
    .otherwise({redirectTo:"/"});
});
