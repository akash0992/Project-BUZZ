/**
 * Created by akash on 29/2/16.
 */

// Reddit constructor function to encapsulate HTTP and pagination logic
angular.module('buzzApp')
.factory('Reddit', function($http) {
  var Reddit = function() {
    this.items = [];
    this.busy = false;
    this.after = '';
    this.skip = 0;
    this.flag=true;
  };

  Reddit.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;
    console.log(this.skip);
    //var url = "https://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";


    if(this.flag) {

      $http.get("http://localhost:9000/api/posts/" + this.skip)
        .then(function (data) {

          this.skip += 10;
          //console.log("data.data .... ",data.data);
          var items = data.data;

          if(items.length==0){
            this.flag=false;
          }
          //console.log("items .... ",items);
          for (var i = 0; i < items.length; i++) {
            this.items.push(items[i]);
            //console.log(items[i]);
          }
          //this.after = "t3_" + this.items[this.items.length - 1].id;
          this.busy = false;
        }.bind(this));


    }


  };

    Reddit.prototype.nextPageLaf = function() {
      if (this.busy) return;
      this.busy = true;
      console.log(this.skip);
      //var url = "https://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";


      if(this.flag) {

        $http.get("http://localhost:9000/api/posts/category/LAF/" + this.skip)
          .then(function (data) {

            this.skip += 10;
            //console.log("data.data .... ",data.data);
            var items = data.data;

            if(items.length==0){
              this.flag=false;
            }
            //console.log("items .... ",items);
            for (var i = 0; i < items.length; i++) {
              this.items.push(items[i]);
              //console.log(items[i]);
            }
            //this.after = "t3_" + this.items[this.items.length - 1].id;
            this.busy = false;
          }.bind(this));


      }


    };



    return Reddit;
});





