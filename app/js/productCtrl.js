'use strict';
angular.module('touchOfModern')
.controller('productCtrl',function($scope,$http) { 
	$scope.items=[];

	$http.get('data.json').success(function(data){
		$scope.items=data.sales;
	});

	$scope.delete=function(item) {
		var index=$scope.items.indexOf(item);
		$scope.items.splice(index,1);
		
	}


})