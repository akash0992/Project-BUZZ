'use strict';

angular.module('buzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl as Home',
        abstract: 'true'
      });
  });
