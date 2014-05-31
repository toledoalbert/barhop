
'use strict';

angular.module('barhopApp')
  .controller('PubCtrl', function ($scope, venues) {
    $scope.photos = [];
    $scope.name = 'My Pub';
    $scope.address = 'My Pub street NY';
    $scope.website = 'mypub.com';
    $scope.description = 'best pub ever';
    $scope.likes = 10;
    $scope.venues = venues;
    $scope.index = Math.floor(Math.random() * 50);
    $scope.audience = Math.floor(Math.random() * 10);
  });
