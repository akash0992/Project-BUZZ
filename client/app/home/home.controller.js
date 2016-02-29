'use strict';

angular.module('buzzApp')
  .controller('HomeCtrl', function ($scope, $http,$window,Auth,$location) {
    var Home = this;
    Home.getUserName = Auth.getCurrentUser().name;
    Home.getCurrentUser = Auth.getCurrentUser();
    Home.imageUrl = Auth.getCurrentUser().google.image.url;
    Home.isLoggedIn =Auth.isLoggedIn();

    if(Home.isLoggedIn){
      $location.path('/home/buzz');
    }


  });
