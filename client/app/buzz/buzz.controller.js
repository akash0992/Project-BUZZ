'use strict';

angular.module('buzzApp')
  .controller('BuzzCtrl', function ($scope,$http,Auth) {

    $scope.obj=[];

    $http.get("/api/posts")
      .then(function(response){
        console.log("buzz.controller.js ---- userBuzz ----- get",response);
        $scope.obj = response.data;
      });

    $scope.setCategory = function(categ){
      $scope.category = categ;
      // alert($scope.category);
    }

    $scope.userBuzz = function(){
      var data={
        category:$scope.category,//['BUZZ','COMPLAINT']
        dateCreated:Date.now(),
        content: $scope.content,
        mUrl :'',
        uId :Auth.getCurrentUser()._id
        //createdBy: {
        //  id:Auth.getCurrentUser()._id,
        //  name:Auth.getCurrentUser().name,
        //  imgUrl:Auth.getCurrentUser().google.image.url
        //}
      };

      $http
        .post('http://localhost:9000/api/posts',data).then(function(res){

          console.log("buzz.controller.js ---- userBuzz ----- post");
          console.log("res",res);
          $scope.obj.push(res.data);
        }, function(err){
          console.log("err", err)
        });
    }

  });

