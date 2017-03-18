var app = angular.module('myApp', []);



// app.directive('superSlide', [function(){
// 	// Runs during compile
// 	return {
// 		// name: '',
// 		// priority: 1,
// 		// terminal: true,
// 		// scope: {}, // {} = isolate, true = child, false/undefined = no change
// 		// controller: function($scope, $element, $attrs, $transclude) {},
// 		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
// 		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
// 		// template: '',
// 		// templateUrl: '',
// 		// replace: true,
// 		// transclude: true,
// 		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
// 		link: function(scope, elem, attrs) {
// 			$(elem).superslides({
// 				hashchange: +attrs.hashchange,
// 				pagination: +attrs.pagination,
// 				play: 		+attrs.play
// 			});
// 		}
// 	};
// }]);



app.directive('superSlide', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		scope: {
			'hashchange': '=',
			'pagination': '=',
			'play': '='
	    },
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, elem, attrs) {
			$(elem).superslides({
				hashchange: +scope.hashchange,
				pagination: +scope.pagination,
				play: 		+scope.play
			});

			// scope.$watch('model', function(newVal) {
			// 	$slider.slider('value', newVal);
		 //    });

			scope.$watch('hashchange', function(newVal) {
				$(elem).superslides({
					hashchange: +scope.hashchange
				});
			});

		}

	};
}])






app.controller('myCtrl', function($scope, $http) {
  
	$scope.hashchangeValue = true;
	$scope.paginationValue = true;
	$scope.playValue = 6000;


});

