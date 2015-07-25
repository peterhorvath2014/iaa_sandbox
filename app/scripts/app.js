'use strict';

angular
  .module('iaaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'smart-table'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/search');
    //
    // Now set up the states
    $stateProvider
      .state('search', {
        url: '/search',
        views: {
          '': { templateUrl: 'scripts/search/search.html' },
          'location@search': {
            templateUrl: 'scripts/search/partials/search.location.html'
          },
          'album@search': {
            templateUrl: 'scripts/search/partials/search.album.html'
          },
          'entry@search': {
            templateUrl: 'scripts/search/partials/search.entry.html'
          }
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'scripts/about/about.html'
      });
  });
