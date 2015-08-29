'use strict';

angular.module('movieDb')
	.factory('movieApiService', ['$http',
		function ($http) {
			var movieApi = {};

			movieApi.getMovies = function () {
				return $http.get('json/movies.json');
			};
			
			movieApi.getGenres = function(){
				return $http.get('json/genres.json');
			};

			return movieApi;
		}
	]);