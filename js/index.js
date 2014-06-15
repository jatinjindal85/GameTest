
angular.module('Zipcar', [])
.controller('NavCtrl', function($scope){
	$scope.slide = 1;
	this.slide = 2;
	$scope.setSlide = function(slideNum){
		$scope.slide = slideNum;
	}


});
