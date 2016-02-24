'use strict';

angular.module('buzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.compl', {
        url: '/compl',
        templateUrl: 'app/compl/compl.html',
        controller: 'ComplCtrl'
      });
  });
