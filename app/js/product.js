angular.module('touchOfModern',['ui.bootstrap'])
.directive('product', function() {
	 return {
	 	restrict: 'E',
	 	template: 	'<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">' +
          				'<a class="close" ng-click="delete(item)">×</a>' +
          				'<a href="{{item.url}}" popover-placement="bottom" popover-title="{{item.title}}" popover="{{item.tagline}}" popover-trigger="mouseenter">'+
            				'<img ng-src="{{item.photos.medium_half}}">'+
          				'</a>'+
        			'</div>'
	 };
});