'use strict';

angular.module('movieDb')
	.controller('CatalogCtrl', function ($http) {
		var self = this;
		
		self.movieList = [];
		self.currentPage = 1;
		self.pageSize = 12;
		
		$http.get('json/movies.json').success(function(data){
			self.movieList = data;
		});
	});