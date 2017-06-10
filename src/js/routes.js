myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
  .state('home', {
    name: 'home',
    url: '/home',
    templateUrl: 'views/home.html'
  })
  .state('base', {
    name: 'base',
    url: '/base?master',
      templateUrl: 'views/base.html'
  })
  .state('classes', {
    name: 'classes',
    url: '/classes',
      templateUrl: 'views/classes.html'
  })
});