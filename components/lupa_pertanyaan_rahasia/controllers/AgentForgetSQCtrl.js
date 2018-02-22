/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('AgentForgetSQCtrl', function ($scope, $rootScope, $state, $localStorage, $ionicPopup, AgentVerifyingDataService, CheckIDEmailService) {


		$scope.initModel = {};

		$scope.VerifyAgentFSQ = function () {
			if ($scope.initModel.agentCode == undefined || $scope.initModel.idcardno == undefined || $scope.initModel.dob == undefined || $scope.initModel.phonenumber == undefined) {
				$rootScope.AlertDialog(msg.mandatoryFields);
			} else {
				$ionicLoading.show();
				$rootScope.agent.code = $scope.initModel.agentCode;
				$rootScope.agent.idcardno = $scope.initModel.idcardno;
				$rootScope.agent.dob = $scope.initModel.dob;
				$rootScope.agent.phonenumber = $scope.initModel.phonenumber;
				var dateOfBirth = $filter('date')($scope.initModel.dob, 'yyyy-MM-dd');
				AgentVerifyingDataService.invoke($scope.initModel.agentCode, $scope.initModel.idcardno, dateOfBirth, $scope.initModel.phonenumber).then(function (res) {
					VerifyAgentForgetSQSuccess(res);
				});
			}
		}
		function VerifyAgentForgetSQSuccess(result) {
			console.log("masuk yah VErifi Success :" + JSON.stringify(result));
			if (result.invocationResult.isSuccessful) {
				CheckIDEmailDataAgent();
			} else {
				console.log("result errror");
				$rootScope.AlertDialog(msg.DataNotFoundAgency);
			}

		}

		function CheckIDEmailDataAgent() {
			CheckIDEmailService.invokeByAgent($rootScope.agent.code).then(function (res) {
				CheckIDEmailAgentDataSuccess(res);
			});
		}
		function CheckIDEmailDataSuccess(res) {
			$ionicLoading.hide();
			if (res.invocationResult.emailId != null) {
				$rootScope.agent.email_agent = res.invocationResult.emailId;
				$state.go("verifikasi-sms", { 'smsType': 'ForgetSecurityQuestion', 'userType': 'agent' });
			} else {
				console.log("harus dikasih pop up email not found");
				$rootScope.AlertDialog(msg.EmailNotFound);

			}
		}


	});