/*global angular:false */
'use strict';

angular.module('movieDb')
	.controller('GenreCtrl', ['$routeParams', '$filter', 'movieApiService',
		function ($routeParams, $filter, movieApiService) {
			var self = this;

			self.movieList = [];
			self.genreList = [];
			self.genreName = $routeParams.genreName;
			self.pageTitle = self.genreName + ' movies';
			self.currentPage = 1;
			self.pageSize = 12;

			movieApiService.getMovies().success(function (data) {
				self.movieList = $filter('filter')(data, function(movie){
					return $filter('filter')(movie.genres, {name: self.genreName}).length;
				});
			});

			movieApiService.getGenres().success(function (data) {
				self.genreList = data;
			});
		}
	]);