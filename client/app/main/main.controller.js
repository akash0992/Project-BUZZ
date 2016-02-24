'use strict';

angular.module('buzzApp')
  .controller('MainCtrl', function ($scope, $http,$window,Auth,$location) {

    $scope.isLoggedIn = Auth.isLoggedIn();

    if($scope.isLoggedIn){
      $location.path('/home/buzz');
    }


  $scope.googleLogin = function(provider){
    $window.location.href='/auth/'+provider;
  }

    //$scope.awesomeThings = [];
    //
    //$http.get('/api/things').success(function(awesomeThings) {
    //  $scope.awesomeThings = awesomeThings;
    //});
    //
    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
    //
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};


  });
