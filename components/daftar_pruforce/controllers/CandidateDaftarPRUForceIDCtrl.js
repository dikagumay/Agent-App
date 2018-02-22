/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('CandidateDaftarPRUForceIDCtrl', function ($scope, $state, $rootScope, $localStorage, $ionicPopup, $ionicLoading, CandidateVerifyingDataService, GetPRUForceIDService) {


		$scope.initModel = {};

		$scope.VerifyDaftar = function () {
			if ($scope.initModel.npa == undefined || $scope.initModel.name == undefined || $scope.initModel.idcardno == undefined) {
				$rootScope.AlertDialog(msg.mandatoryFields);
			} else {
				$ionicLoading.show();
				$rootScope.candidate.npa = $scope.initModel.npa;
				$rootScope.candidate.name = $scope.initModel.name;
				$rootScope.candidate.idcardno = $scope.initModel.idcardno;
				var checksalesforceidflag = "Y";
				$rootScope.candidate.checksalesforceidflag = checksalesforceidflag;	
				CandidateVerifyingDataService.invoke($scope.initModel.npa, $scope.initModel.name, $scope.initModel.idcardno, checksalesforceidflag).then(function (res) {
					VerifyDaftarSuccess(res);
				});
			}

		}
		function VerifyDaftarSuccess(res) {
			console.log("masuk yah VErifi Success :" + JSON.stringify(res));
			if (res.invocationResult.respCode == 200) {
				//flag aob service
				var agentCode = "";
				GetPRUForceIDService.invoke(agentCode, $scope.initModel.npa).then(function (res) {
					GetPRUForceIDSuccess(res);
				});
			} else {
				console.log("result errror");
				$ionicLoading.hide();
				$rootScope.AlertDialog(msg.DataNotFoundRecruiter);
			}

		}

		function GetPRUForceIDSuccess(res) {
			var RespCode = res.invocationResult.errorCode;
			var message = res.invocationResult.errorMessage;
			if (RespCode == 000000) {
				$ionicLoading.hide();
				$rootScope.AlertDialog(msg.PRUforceId_ca_exist);
			} else {
				$ionicLoading.hide();
				$state.go("verifikasi-sms", { 'smsType': 'DaftarPRUForceID', 'userType': 'candidate' });
			}
		}
	})