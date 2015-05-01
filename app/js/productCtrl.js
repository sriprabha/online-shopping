'use strict';
angular.module('touchOfModern')
.controller('productCtrl',function($scope,$http) { 
	$scope.items=[];
	$scope.limit=24;
	var step=12;

	$http.get('data.json').success(function(data){
		$scope.items=data.sales;
	});

	$scope.delete=function(item) {
		var index=$scope.items.indexOf(item);
		$scope.items.splice(index,1);
		
	}

	$scope.increment=function(){
		$scope.limit+=step;
	}

})