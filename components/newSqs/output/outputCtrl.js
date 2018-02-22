var pruforce = angular.module('PruForce');

pruforce.controller('outputCtrl', function($scope, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when("", "/output/list");
  $urlRouterProvider.when("/", "/output/list");

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/output/list");

  $stateProvider
});