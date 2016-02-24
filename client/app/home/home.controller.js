'use strict';

angular.module('buzzApp')
  .controller('HomeCtrl', function ($scope, $http,$window,Auth,$location) {

    $scope.getUserName = Auth.getCurrentUser().name;
    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.imageUrl = Auth.getCurrentUser().google.image.url;
    $scope.isLoggedIn =Auth.isLoggedIn();

    if($scope.isLoggedIn){
      $location.path('/home/buzz');
    }


  });
