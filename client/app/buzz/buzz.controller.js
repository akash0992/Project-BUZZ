'use strict';

angular.module('buzzApp')
  .controller('BuzzCtrl', function ($scope,$http,Auth) {
    $scope.buzz ={};
    $scope.obj=[];
    $scope.buzz.category='BUZZ';
    $scope.cat='BUZZ';

    $http.get("/api/posts")
      .then(function(response){
        console.log("buzz.controller.js ---- userBuzz ----- get",response);
        $scope.obj = response.data;
      });

    $scope.setCategory = function(categ){
      $scope.buzz.category = categ;
      if(categ == 'BUZZ'){
        $scope.cat='BUZZ';
      }else{
        $scope.cat='Lost & Found';
      }
      // alert($scope.category);
    }

    $scope.userBuzz = function(){

      if($scope.buzz.content==null || $scope.buzz.content == "" ){
        alert("Content of Buzz can't be Blank !!!");
        return false;
      }
      $scope.buzz.dateCreated = Date.now();
      $scope.buzz.mUrl = '';
      $scope.buzz.content = $scope.buzz.content.replace(/\n/g, "<br/>");

      var fd = new FormData();

      for(var key in $scope.buzz){
        fd.append(key,$scope.buzz[key]);
      }

      $http.post("http://localhost:9000/api/posts", fd,{
        transformRequest : angular.identity,
        headers: { 'Content-Type' : undefined}
      }).then(function(res){

          console.log("buzz.controller.js ---- userBuzz ----- post");
          console.log("res",res.rs);

          $scope.obj.push(res.data);
          $scope.buzz.content = "";
          $scope.buzz.category = "BUZZ";
          $scope.buzz.file = '';

      }, function(err){
          console.log("err", err)
        });
    }
  });
