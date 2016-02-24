'use strict';

angular.module('buzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.sett', {
        url: '/sett',
        templateUrl: 'app/sett/sett.html',
        controller: 'SettCtrl'
      });
  });
