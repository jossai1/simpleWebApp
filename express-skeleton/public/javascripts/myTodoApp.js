var app = angular.module('myTodoApp',[]);

app.controller('myTodoCtrl', function($scope, $http){

    $http.get('/todos')
        .success(function(response){

          /*
          “todoItems” is populated in controller by http get request,
          they are completed in client side already:
          */
            $scope.todoItems = response;
        });

});
