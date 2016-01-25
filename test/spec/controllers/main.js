'use strict';

describe('Controller: appController', function () {

  // load the controller's module
  beforeEach(module('app'));

  var AppCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppCtrl = $controller('appController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // there are no tests...
  it('should just be true', function () {
    expect(true).toBe(true);
   });
});
