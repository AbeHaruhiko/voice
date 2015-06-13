/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="login/login.controller.ts"/>
/// <reference path="../app/components/navbar/navbar.controller.ts" />
/// <reference path="./auth/services/auth-service.ts"/>


module chavo {
  'use strict';

  export interface IChavoRootScope extends ng.IRootScopeService {
    currentUser: Parse.User;
  }

  angular.module('chavo', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'ui.validate'
    ])
    .service('AuthService',AuthService)
    .controller('MainController', MainController)
    .controller('LoginController', LoginController)
    .controller('NavbarController', NavbarController)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });

    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope: IChavoRootScope) {
    Parse.initialize('FpENpUI2dIIOJu5J4UrssehUKwkB1afjOfEK92Zv', '1Wbddi5o4HemnLkhBCmHov121BuE8qS5d1jxPxKs');
    $rootScope.currentUser = Parse.User.current();
  });
}
