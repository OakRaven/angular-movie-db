'use strict';

/**
 * @ngdoc overview
 * @name movieDbApp
 * @description
 * # movieDbApp
 *
 * Main module of the application.
 */
angular
  .module('movieDb', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'youtube-embed'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalog'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-details.html',
        controller: 'MovieCtrl',
        controllerAs: 'details'
      })
      .when('/genre/:genreName', {
        templateUrl: 'views/catalog.html',
        controller: 'GenreCtrl',
        controllerAs: 'catalog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
