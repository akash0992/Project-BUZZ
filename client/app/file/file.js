'use strict';

angular.module('buzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.compl.file', {
        url: '/file',
        templateUrl: '/app/file/file.html',
        controller: 'FileCtrl'
      });
  });



//window.onload=function(){
//  $('.selectpicker').selectpicker();
//  $('.rm-mustard').click(function() {
//    $('.remove-example').find('[value=Mustard]').remove();
//    $('.remove-example').selectpicker('refresh');
//  });
//  $('.rm-ketchup').click(function() {
//    $('.remove-example').find('[value=Ketchup]').remove();
//    $('.remove-example').selectpicker('refresh');
//  });
//  $('.rm-relish').click(function() {
//    $('.remove-example').find('[value=Relish]').remove();
//    $('.remove-example').selectpicker('refresh');
//  });
//  $('.ex-disable').click(function() {
//    $('.disable-example').prop('disabled',true);
//    $('.disable-example').selectpicker('refresh');
//  });
//  $('.ex-enable').click(function() {
//    $('.disable-example').prop('disabled',false);
//    $('.disable-example').selectpicker('refresh');
//  });
//
//$('.scrollMe .dropdown-menu').scrollyou();
//
//prettyPrint();
//};
