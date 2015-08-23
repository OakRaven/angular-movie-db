'use strict';

angular.module('movieDb')
	.controller('MovieCtrl', function($http, $filter, $routeParams){
		var self = this;
		
		self.movieId = $routeParams.id;
		
		$http.get('json/movies.json').success(function(data){
			self.movie = $filter('filter')(data, {id: self.movieId})[0];
		});
	});