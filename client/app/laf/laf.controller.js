'use strict';

angular.module('buzzApp')
  .controller('LafCtrl', function ($scope,$http) {
    $scope.obj=[];

    $http.get("/api/posts")
      .then(function(response){
        console.log("laf.controller.js ---- userBuzz-laf ----- get",response);
        $scope.obj = response.data;
      });

  });
