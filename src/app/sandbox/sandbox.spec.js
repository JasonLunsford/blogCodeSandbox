
describe( 'sandbox section', function() {
  beforeEach( module( 'blogCodeSandbox.sandbox' ) );

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));
});

