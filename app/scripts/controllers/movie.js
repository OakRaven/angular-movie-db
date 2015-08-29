'use strict';

angular.module('movieDb')
	.controller('MovieCtrl', ['$filter', '$routeParams', 'movieApiService',
		function ($filter, $routeParams, movieApiService) {

			var self = this;

			self.movieId = $routeParams.id;

			movieApiService.getMovies().success(function (data) {
				self.movie = $filter('filter')(data, { id: self.movieId })[0];
			});

		}
	]);