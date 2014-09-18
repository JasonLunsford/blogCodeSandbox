angular.module( 'blogCodeSandbox.modusBlog02', [
  'blogCodeSandbox.modusBlog02.controllers',
  'blogCodeSandbox.services',
  'blogCodeSandbox.directives',
  
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'modusBlog02', {
    url: '/modusBlog02',
    views: {
      "navigation": {
        controller: 'NavigationCtrl',
        templateUrl: 'navigation/navigation.tpl.html'
      },
      "main": {
        controller: 'ModusBlog02Ctrl',
        templateUrl: 'modusBlog02/modusBlog02.tpl.html'
      }
    },
    data:{ pageTitle: 'The Magic of Two Way Bindings: An Angular Deep Dive' }
  });
});