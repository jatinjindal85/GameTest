
var app = angular.module('Zipcar', []);


app.controller('GetCtrl', function($scope){
	$scope.games = [
		{name:'Age Of Empires', image:'image1.png', owner:'John', distance:'1.5'},
		{name:'Roller Coaster Tycoon', image:'image2.png', owner:'Alex', distance:'2.5'},
		{name:'Prince of Persia', image:'image3.jpg', owner:'Crazy', distance:'0.5'},
		{name:'Midtown Madness', image:'image4.jpg', owner:'John', distance:'7'}
	];

});

app.controller('PostCtrl', function($scope){
	$scope.newGame = {name:'Name', image:'default.jpg'};
});


app.controller('NavCtrl', function($scope){
	$scope.slide = 1;
	$scope.setSlide = function(slideNum){
		$scope.slide = slideNum;
	}
});
