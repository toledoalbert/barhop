'use strict';

angular
  .module('barhopApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pub', {
        templateUrl: 'views/pub.html',
        controller: 'PubCtrl',
        resolve: {
          venues: ['$http', function($http){
            return $http.get('https://api.foursquare.com/v2/venues/search?ll=40.7,-74&ll=40.733288,-73.990978&radius=5000&categoryId=4bf58dd8d48988d11b941735&limit=50&oauth_token=AARHAGZELXXYCJ3NL2E0T0J3KWGH11KSN3MCHC4CE11JFRJX&v=20140530').then(function(response){
              return response.data;
            });
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
