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
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalog'
      })
      .when('/:genre', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalog'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-details.html',
        controller: 'MovieCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
