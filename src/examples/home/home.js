'use strict';

var angular = require('angular');

/* @ngInject */
function HomeController($scope, $log, iScrollService) {
    $scope.iScrollState = iScrollService.state;
}

/* @ngInject */
function HomeHeaderController($log) {
    $log.debug('home.js:12:HomeHeaderController.HomeHeaderController: ');
}

/* @ngInject */
function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            'contents@': {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            },
            'header@': {
                templateUrl: 'home/header.html',
                controller: 'HomeHeaderController'
            }
        }
    });
}

module.exports = angular.module('myApp.home', [])
    .config(config)
    .controller('HomeController', HomeController)
    .controller('HomeHeaderController', HomeHeaderController);

