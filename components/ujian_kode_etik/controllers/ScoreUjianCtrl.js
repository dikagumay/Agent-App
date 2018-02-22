/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('ScoreUjianCtrl', function ($scope, $state, $stateParams) {

        $scope.score = $stateParams.scoreUjian;

	})