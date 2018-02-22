/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('CandidateForgetSQCtrl', function ($scope, $state, $localStorage, $ionicPopup, CandidateVerifyingDataService) {

		$scope.initModel = {};
		$scope.VerifyCandidateFSQ = function () {
			if ($scope.initModel.npa == undefined || $scope.initModel.name == undefined || $scope.initModel.idcardno == undefined) {
				$rootScope.AlertDialog(msg.mandatoryFields);
			} else {
				$ionicLoading.show();
				$ionicLoading.show();
				$rootScope.candidate.npa = $scope.initModel.npa;
				$rootScope.candidate.name = $scope.initModel.name;
				$rootScope.candidate.idcardno = $scope.initModel.idcardno;
				var checksalesforceidflag = "N";
				$rootScope.candidate.checksalesforceidflag = checksalesforceidflag;
				CandidateVerifyingDataService.invoke($scope.initModel.npa, $scope.initModel.name, $scope.initModel.idcardno, checksalesforceidflag).then(function (res) {
					VerifyCandidateFSQSuccess(res);
				});
			}

		}

		function VerifyCandidateFSQSuccess(res) {
			console.log("masuk yah VErifi Success :" + JSON.stringify(res));
			$ionicLoading.hide();
			if (res.invocationResult.isSuccessful) {
				$state.go("verifikasi-sms", { 'smsType': 'ForgetSecurityQuestion', 'userType': 'candidate' });
			} else {
				console.log("result errror");
				$rootScope.AlertDialog(msg.DataNotFoundRecruiter);
			}
		}


	})