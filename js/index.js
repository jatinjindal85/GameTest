
angular.module('Zipcar', [])
.controller('NavCtrl', function($scope){
	$scope.slide = 1;
	$scope.setSlide = function(slideNum){
		$scope.slide = slideNum;
	}
});
