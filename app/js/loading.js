angular.module('touchOfModern',[])
.directive('loading', function() {
	 return {
	 	restrict: 'E',
	 	template: 	'<div class="text-center"> ' +
  						'<button class="btn btn-lg btn-warning middle">' + 
							'<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...' +
						'</button>' +
					  '</div>'
	 };
});