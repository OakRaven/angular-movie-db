'use strict';

angular.module('movieDb')
	.controller('CatalogCtrl', function ($http, $routeParams) {
		var self = this;

		self.genreId = $routeParams.genre ? parseInt($routeParams.genre) : 0;

		self.movieList = [];
		self.currentPage = 1;
		self.pageSize = 12;

		$http.get('json/movies.json').success(function (data) {
			
			if (self.genreId === 0) {
				self.movieList = data;
			} else {
				self.movieList = _.filter(data, function (item) {	
					return _.find(item.genres, {id: self.genreId});
				});				
			}
		});
	});