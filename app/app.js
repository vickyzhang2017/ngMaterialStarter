'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('view1', {
            url : '/view1',
            cache: false,
            templateUrl : 'page/view1/view1.html',
            controller : 'View1Ctrl'
        })
        .state('view2', {
            url : '/view2',
            cache: false,
            templateUrl : 'page/view2/view2.html',
            controller : 'View2Ctrl'
        });

    $urlRouterProvider.otherwise('/view1');
}]);
