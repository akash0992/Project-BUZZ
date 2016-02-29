'use strict';

angular.module('buzzApp')
  .controller('ComplCtrl', function ($scope,Auth,$location) {
    $scope.message = 'Hello';

    $scope.isAdmin = Auth.isAdmin;
    $scope.isLoggedIn =Auth.isLoggedIn();

    //if($scope.isLoggedIn){
    //  $location.path('/home/compl/file');
    //}
  });
