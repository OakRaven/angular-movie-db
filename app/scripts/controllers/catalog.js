'use strict';

angular.module('movieDb')
	.controller('CatalogCtrl', function ($http) {
		var self = this;
		
		self.movieList = [];
		
		$http.get('json/movies.json').success(function(data){
			self.movieList = data;
		});
	});