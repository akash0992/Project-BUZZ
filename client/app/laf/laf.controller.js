'use strict';

angular.module('buzzApp')
  .controller('LafCtrl', function ($scope,$http,Reddit) {
    $scope.obj=[];
    $scope.reddit = new Reddit();
    console.log('reddit.items', $scope.reddit.items);

    //$http.get("/api/posts/category/LAF")
    //  .then(function(response){
    //    console.log("laf.controller.js ---- userBuzz-laf ----- get",response);
    //    $scope.obj = response.data;
    //  });

  });
