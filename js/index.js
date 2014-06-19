
var app = angular.module('Zipcar', []);

app.controller('NavCtrl', function($scope){
	$scope.tab = 'find';
	$scope.setTab = function(tabName){
		$scope.tab = tabName;
	}
});


app.controller('FindCtrl', function($scope){
	$scope.games = [
		{name:'Age Of Empires', image:'image1.png', owner:'John', distance:'1.5'},
		{name:'Roller Coaster Tycoon', image:'image2.png', owner:'Alex', distance:'2.5'},
		{name:'Prince of Persia', image:'image3.jpg', owner:'Crazy', distance:'0.5'},
		{name:'Midtown Madness', image:'image4.jpg', owner:'John', distance:'7'}
	];
	$scope.getResultsCount = function(){
		return $scope.games.length;
	};
	$scope.requestGame = function(){
		alert("Requesting game.");
		//$scope.games.push({name:$scope.newGameName, image:$scope.newGamePic, owner:'Gulla', distance:'2.2'});
		//$scope.newGameName = '';
	};
});

app.controller('PostedCtrl', function($scope){
	$scope.games = [
		{name:'Age Of Empires', image:'image1.png', location:'Sunnyvale, CA', views:'2', requests:'0'},
		{name:'Prince of Persia', image:'image2.png', location:'Sunnyvale, CA', views:'5', requests:'1'}
	];
	$scope.addGame = function(){
		alert("Adding game.");
		$scope.games.push({name:$scope.newGameName, image:$scope.newGamePic, location:'Sunnyvale, CA', views:'0', requests:'0'});
		$scope.newGameName = '';
	};
});

app.controller('RentedCtrl', function($scope){
	$scope.rentedtab = 'owned';
	$scope.setRentedTab = function(rentedTabName){
		$scope.rentedtab = rentedTabName;
	}
	$scope.games = [
		{name:'Age Of Empires', image:'image1.png', location:'Sunnyvale, CA', views:'2', requests:'0'},
		{name:'Prince of Persia', image:'image2.png', location:'Sunnyvale, CA', views:'5', requests:'1'}
	];
});




/*app.controller('NavCtrl', function($scope){
	$scope.slide = 1;
	$scope.setSlide = function(slideNum){
		$scope.slide = slideNum;
	}
});
*/
