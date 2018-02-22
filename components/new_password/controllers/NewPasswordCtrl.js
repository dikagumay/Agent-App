/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('NewPasswordCtrl', function ($scope, $state, QuestionFP, $localStorage, $ionicPopup, $ionicLoading, NewPasswordService) {

		$scope.initModel = {};

		$scope.NewPass = function () {
			$ionicLoading.show();
			if ($scope.initModel.pruforceId == undefined || $scope.initModel.password == undefined || $scope.initModel.cpassword == undefined) {
				$rootScope.AlertDialog(msg.mandatoryFields);
			} else if ($scope.initModel.pruforceId != $scope.initModel.cpassword) {
				$rootScope.AlertDialog(msg.PasswordNotMatch);
			} else {
				NewPasswordService.invoke($scope.initModel.pruforceId, $scope.initModel.password)
					.then(function (res) {
						NewPasswordSuccess(res);
					});
			}

		}
		function NewPasswordSuccess(result) {
			$ionicLoading.hide();
			if (result.invocationResult.errorCode == 000000) {
				$rootScope.AlertDialog(msg.SuccessChangePassword);
				$state.go("login");
			} else {
				$rootScope.AlertDialog(result.invocationResult.errorMessage);
			}

		}

	})