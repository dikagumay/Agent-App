
angular.module('PruForce.controllers')
	.controller('ChangePasswordCtrl', function ($scope, $ionicPopup, $rootScope, $ionicLoading, ChangePasswordService) {

		$scope.initModel = [];
		$scope.ChangePassword = function () {

			if ($scope.initModel.currentPassword == undefined || $scope.initModel.newPassword == undefined || $scope.initModel.newPasswordConfirm == undefined ||
				$scope.initModel.currentPassword == "" || $scope.initModel.newPassword == "" || $scope.initModel.newPasswordConfirm == "") {
				$rootScope.AlertDialog("Tidak Boleh Kosong");
			} else if ($scope.initModel.newPassword != $scope.initModel.newPasswordConfirm) {
				$rootScope.AlertDialog("Kata Sandi tidak Match");
			} else {
				$ionicLoading.show();

				ChangePasswordService.invoke($rootScope.username, $scope.initModel.newPassword, $scope.initModel.newPasswordConfirm).then(function (res) {
					ChangePassSuccess(res);
				});
			}
		}


		function ChangePassSuccess(result) {
			$ionicLoading.hide();
			if (result.invocationResult.isSuccessful) {
				if (result.invocationResult.agentType != null || result.invocationResult.agentCode == null || result.invocationResult.salesforceId == null) {
					$rootScope.AlertDialog(result.invocationResult.errorMessage);
				} else {
					$rootScope.AlertDialog(result.invocationResult.errorMessage);
				}
			} else {
				$rootScope.AlertDialog("Response Failed");
			}

		}

	});