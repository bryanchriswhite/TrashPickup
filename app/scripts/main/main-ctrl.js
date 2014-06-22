'use strict';

angular.module('trashPickup')
  .controller('MainCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
      $http.get('/trash-pickup.json').success(function(data) {
        $scope.data = data;
      })
    }
  ]);
