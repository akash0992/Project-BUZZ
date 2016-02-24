'use strict';

angular.module('buzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.buzz', {
        url: '/buzz',
        templateUrl: 'app/buzz/buzz.html',
        controller: 'BuzzCtrl'
      });
  });
