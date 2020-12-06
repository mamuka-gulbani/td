var app = angular.module('myApp' , []);

app.controller('todoCtrl', function($scope) {
	$scope.todolist = [{todoText: 'Eating',done:false},
					  {todoText: 'Sleep',done:false},
					  {todoText: 'Bread',done:false},
					  {todoText: 'Cream',done:false},
					  {todoText: 'Lunch',done:false},
					  {todoText: 'Dinner',done:false}
	];

	$scope.todoAdd = function(){
		$scope.todolist.push({todoText:$scope.todoinput, done:false});
		$scope.todoinput = "";
	};
	$scope.remove = function(){
		var oldlist = $scope.todolist;
		$scope.todolist = [];
		angular.forEach(oldlist, function(x){
			if (!x.done) $scope.todolist.push(x);
		});
	};
	
});