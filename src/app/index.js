/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />
Parse.initialize('FpENpUI2dIIOJu5J4UrssehUKwkB1afjOfEK92Zv', '1Wbddi5o4HemnLkhBCmHov121BuE8qS5d1jxPxKs');
var chavo;
(function (chavo) {
    'use strict';
    angular.module('chavo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
        .controller('MainController', chavo.MainController)
        .controller('NavbarController', chavo.NavbarController)
        .config(function ($stateProvider, $urlRouterProvider) {
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
            controller: 'LoginContoroller'
        });
        $urlRouterProvider.otherwise('/');
    });
})(chavo || (chavo = {}));
