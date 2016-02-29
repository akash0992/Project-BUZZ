'use strict';

angular.module('buzzApp')
  .controller('FileCtrl', function ($scope) {
    $scope.message = 'Hello';
    console.log("file ctrl");

    $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

      var $target = $( event.currentTarget );

      $target.closest( '.btn-group' )
        .find( '[data-bind="label"]' ).text( $target.text() )
        .end()
        .children( '.dropdown-toggle' ).dropdown( 'toggle' );

      return false;

    });

  });
