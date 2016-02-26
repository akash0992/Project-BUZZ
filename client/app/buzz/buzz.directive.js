/**
 * Created by akash on 26/2/16.
 */

angular.module('buzzApp')
  .directive('fileModel',['$parse',function($parse){
    return{
      restrict:'A',
      link:function(scope,elem,attrs){
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        elem.bind('change',function(){
          scope.$apply(function(){
            modelSetter(scope,elem[0].files[0]);
          });
        });
      }
    }

  }])
