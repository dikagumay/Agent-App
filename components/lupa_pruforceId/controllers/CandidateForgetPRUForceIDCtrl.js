/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('CandidateForgetPRUForceIDCtrl', function ($scope, $rootScope, $state, $localStorage, $ionicPopup, CandidateVerifyingDataService, CheckIDEmailService) {


		$scope.initModel = {};

		$scope.VerifyCandidateFID = function () {
			if ($scope.initModel.npa == undefined || $scope.initModel.name == undefined || $scope.initModel.idcardno == undefined) {
				$rootScope.AlertDialog(msg.mandatoryFields);
			} else {
				$ionicLoading.show();
				$rootScope.candidate.npa = $scope.initModel.npa;
				$rootScope.candidate.name = $scope.initModel.name;
				$rootScope.candidate.idcardno = $scope.initModel.idcardno;
				var checksalesforceidflag = "N";
				$rootScope.candidate.checksalesforceidflag = $scope.initModel.checksalesforceidflag;
				CandidateVerifyingDataService.invokeByCandidate($scope.initModel.npa, $scope.initModel.name, $scope.initModel.idcardno, checksalesforceidflag).then(function (res) {
					VerifyCandidateFIDSuccess(res);
				});
			}

		}

		function VerifyCandidateFIDSuccess(result) {
			console.log("masuk yah VErifi Success :" + JSON.stringify(result));
			if (result.invocationResult.respCode == 200) {
				$state.go("verifikasi-sms", { 'smsType': 'ForgetPRUForceID', 'userType': 'candidate' });
			} else {
				console.log("result errror");
				$rootScope.AlertDialog(msg.DataNotFoundRecruiter);
			}

		}

	});