/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('CreatePRUForceIDCtrl', function ($scope, $state, $rootScope, $stateParams, $localStorage, $ionicPopup, $ionicLoading, GetPRUForceIDService, CreatePRUForceIDService) {


		$scope.initModel = {};

		$scope.CreatePRUForceID = function () {
			$ionicLoading.show();

			if ($scope.initModel.pruforceID == undefined || $scope.initModel.cpassword == undefined || $scope.initModel.password == undefined) {
				$rootScope.AlertDialog(msg.manda);
			} else if ($scope.initModel.cpassword != $scope.initModel.password) {
				$rootScope.AlertDialog(msg.PasswordNotMatch);
			} else {
				switch ($stateParams.type) {
					case "createPRUForceIDWithSFA":
						var flagNpa = "0";
						CreatePRUForceIDService.invoke($scope.initModel.pruforceID, $scope.initModel.password, flagNpa, $rootScope.agent.code).then(function (res) {
							DaftarPRUForceIDSuccess(res);
						});
						break;
					case "createPRUForceIDNoSFA":
						var flagNpa = "0";
						CreatePRUForceIDService.invoke($scope.initModel.pruforceID, $scope.initModel.password, flagNpa, $rootScope.agent.code).then(function (res) {
							DaftarPRUForceIDSuccess(res);
						});
						break;
					case "createPRUForceIDCandidate":
						var flagAgentCode = "0";
						CreatePRUForceIDService.invoke($scope.initModel.pruforceID, $scope.initModel.password, $rootScope.candidate.npa, flagAgentCode).then(function (res) {
							DaftarPRUForceIDSuccess(res);
						});
						break;

				}
			}

		}
		function DaftarPRUForceIDSuccess(res) {
			if (res.invocationResult.errorCode == 000000) {
				$ionicLoading.hide();
				$rootScope.temp.pruforceId = res.invocationResult.agent.salesforceId;
				$state.go("security-question");
			} else {
				$rootScope.AlertDialog(res.invocationResult.errorMessage);
			}
		}


	})