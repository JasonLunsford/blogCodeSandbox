angular.module( 'blogCodeSandbox', [
  'templates-app',
  'templates-common',

  'blogCodeSandbox.navigation',
  'blogCodeSandbox.sandbox',
  'blogCodeSandbox.modusBlog02',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/sandbox' );
})

.run( function run () {
  
})

.controller( 'GlobalSandboxCtrl', function GlobalSandboxCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Blog Code Sandbox' ;
    }
  });
});