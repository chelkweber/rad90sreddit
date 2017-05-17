var app = angular.module('redditMod');

app.directive('post', function() {
	return {
		restrict: 'E',
//		templateUrl: 'post.html',
		template: '<div class="post"><div class="figure"><a href="{{post.data.url}}" target="_blank"><img src="{{post.data.thumbnail}}"></a></div><div class="caption"><h2>{{post.data.title}}</h2><h3>{{post.data.author}}</h3></div></div>',
		replace: false
	}		
});