// core.js
// @DESCRIPTION: this file will hold the angular code for your app
var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	//when landing on this page get all todos and display them
	$http.get('api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

		//when submitting the add form send the text t the node api
		$scope.createTodo = function() {
			$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {} //clear the form
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		};
		//delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		};
}