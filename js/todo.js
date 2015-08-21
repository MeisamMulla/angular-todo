var todo = angular.module('todo', []);

todo.controller('todoController', function($scope, $http) {
	$scope.tasks = [];

	if (window.localStorage['tasks']) {
		var items = JSON.parse(window.localStorage['tasks']);

		for (var i = 0; i < items.length; i++) {
			$scope.tasks.push(items[i]);
		}
	}

	$scope.addTodo = function() {
		$scope.tasks.push({
			'title': $scope.todoText,
			'added': new Date(),
			'done': false,
		});

		window.localStorage['tasks'] = JSON.stringify($scope.tasks);

		$scope.todoText = null;
	}

	$scope.toggleTodo = function(index) {
		$scope.tasks[index].done = ($scope.tasks[index].done == true) ? false : true;
		window.localStorage['tasks'] = JSON.stringify($scope.tasks);
	}

	$scope.deleteTodo = function(index) {
		$scope.tasks.splice(index, 1);
		window.localStorage['tasks'] = JSON.stringify($scope.tasks);
	}
});
