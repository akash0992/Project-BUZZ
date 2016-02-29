'use strict';

angular.module('buzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.compl', {
        abstract:true,
        url: '/compl',
        templateUrl: 'app/compl/compl.html',
        controller: 'ComplCtrl'
      });
  });
