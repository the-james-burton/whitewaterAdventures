'use strict';

/**
 * @ngdoc overview
 * @name whitewaterAdventuresApp
 * @description
 * # whitewaterAdventuresApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    "ngRoute",
    "psFramework",
    "ngStorage",
    "ngAnimate" ])

    /*
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
      .otherwise({
        redirectTo: '/'
      });
  })
  */

  .config(function ($provide) {
      $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
          return function (exception, cause) {
              $delegate(exception, cause);
              alert(exception.message);
          };
      }]);
  })

  .config(['$routeProvider', function ($routeProvider) {

      var routes = [

          {
              url: '/dashboard',
              config : {template: '<wwa-dashboard></www-dashboard>'
              }
          },

          {
              url: '/locations',
              config: {
                  template: '<wwa-locations></www-locations>'
              }
          },

          {
              url: '/guides',
              config: {
                  template: '<wwa-guides></www-guides>'
              }
          }
      ];

      routes.forEach(function (route) {
          $routeProvider.when(route.url, route.config);
      });

      $routeProvider.otherwise({ redirectTo: '/dashboard' });
  }])
;
