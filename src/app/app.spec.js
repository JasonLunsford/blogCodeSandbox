describe( 'GlobalSandboxCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var GlobalSandboxCtrl, $location, $scope;

    beforeEach( module( 'blogCodeSandbox' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      GlobalSandboxCtrl = $controller( 'GlobalSandboxCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( GlobalSandboxCtrl ).toBeTruthy();
    }));
  });
});
