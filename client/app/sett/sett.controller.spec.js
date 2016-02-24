'use strict';

describe('Controller: SettCtrl', function () {

  // load the controller's module
  beforeEach(module('buzzApp'));

  var SettCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SettCtrl = $controller('SettCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
