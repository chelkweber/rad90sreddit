var app = angular.module('redditMod');
	
app.factory('redditService', function($http) {
	var post = {};
	
	return {
		getPost: function() {
			return $http.get('https://www.reddit.com/r/nostalgia.json').then(function(response) {
				post = response.data.data.children;
				return post;
			});
		}
	}
});