'use strict';

angular.module('buzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.laf', {
        url: '/laf',
        templateUrl: 'app/laf/laf.html',
        controller: 'LafCtrl'
      });
  });
