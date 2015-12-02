'use strict';

/**
 * @ngdoc overview
 * @name aerosmithApp
 * @description
 * # aerosmithApp
 *
 * Main module of the application.
 */
angular
  .module('aerosmithApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/musicas', {
        templateUrl: 'views/musicas.html',
        controller: 'musicCtrl',
        controllerAs: 'musica'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
