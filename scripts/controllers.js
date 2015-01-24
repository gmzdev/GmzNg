(function () {
  'use strict'
  angular.module('tdl.controllers')
    .controller('todoController', ['$scope', 'guid', 'storage', function ($scope, guid, storage) {

      $scope.todos = storage.getObject('tdl');


      $scope.addTodo = function () {
        $scope.todos.push({ id: guid(), text: $scope.todoText, done: false });

        storage.setObject('tdl', $scope.todos);

        $scope.todoText = '';
      };

      $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
          count += todo.done ? 0 : 1;
        });
        return count;
      };

      $scope.archive = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];

        angular.forEach(oldTodos, function (todo) {
          if (!todo.done) $scope.todos.push(todo);
          storage.setObject('tdl', $scope.todos);
        });
      };
    } ]);
})();