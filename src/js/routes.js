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
    url: '/base',
      templateUrl: 'views/base.html'
  })
});