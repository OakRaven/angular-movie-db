/*global angular:false */
'use strict';

angular.module('movieDb')
	.controller('CatalogCtrl', ['movieApiService',
		function (movieApiService) {
			var self = this;

			self.movieList = [];
			self.genreList = [];
			self.pageTitle = "Most Watched this Week";
			self.currentPage = 1;
			self.pageSize = 12;

			movieApiService.getMovies().success(function (data) {
				self.movieList = data;
			});

			movieApiService.getGenres().success(function (data) {
				self.genreList = data;
			});
		}
	]);