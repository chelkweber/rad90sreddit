var app = angular.module('redditMod');

app.controller('redditCtrl', function($scope, redditService) {
	console.log('ctrl has loaded');
	
	$scope.feed = [];

	redditService.getPost().then(function(post) {
		$scope.feed = post;
		console.log($scope.feed);
	});	
});