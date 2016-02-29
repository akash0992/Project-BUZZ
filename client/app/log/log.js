'use strict';

angular.module('buzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.compl.log', {
        url: '/log',
        templateUrl: 'app/log/log.html',
        controller: 'LogCtrl'
      });
  });
