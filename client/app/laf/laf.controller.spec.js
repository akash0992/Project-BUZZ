'use strict';

describe('Controller: LafCtrl', function () {

  // load the controller's module
  beforeEach(module('buzzApp'));

  var LafCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LafCtrl = $controller('LafCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
