angular.module( 'blogCodeSandbox.sandbox', [
  'blogCodeSandbox.sandbox.controllers',
  'blogCodeSandbox.services',
  'blogCodeSandbox.directives',
  
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'sandbox', {
    url: '/sandbox',
    views: {
      "navigation": {
        controller: 'NavigationCtrl',
        templateUrl: 'navigation/navigation.tpl.html'
      },
      "main": {
        controller: 'SandBoxCtrl',
        templateUrl: 'sandbox/sandbox.tpl.html'
      }
    },
    data:{ pageTitle: 'Sandbox' }
  });
});