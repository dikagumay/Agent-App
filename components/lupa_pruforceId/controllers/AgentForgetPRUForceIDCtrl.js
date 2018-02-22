/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('AgentForgetPRUForceIDCtrl', function ($scope, $rootScope, $state, $localStorage, $ionicPopup, AgentVerifyingDataService, CheckIDEmailService) {


		$scope.initModel = {};

		// this is used for agent forget PRUForceID

		$scope.VerifyAgentFID = function () {
			if ($scope.initModel.agentCode == undefined || $scope.initModel.idcardno == undefined || $scope.initModel.dob == undefined || $scope.initModel.phonenumber == undefined) {
				$rootScope.AlertDialog(msg.mandatoryFields);
			} else {
				$rootScope.agent.code = $scope.initModel.agentCode;
				$rootScope.agent.idcardno = $scope.initModel.idcardno;
				$rootScope.agent.dob = $scope.initModel.dob;
				$rootScope.agent.phonenumber = $scope.initModel.phonenumber;
				var dateOfBirth = $filter('date')($scope.initModel.dob, 'yyyy-MM-dd');
				AgentVerifyingDataService.invoke($scope.initModel.agentCode, $scope.initModel.idcardno, dateOfBirth, $scope.initModel.phonenumber).then(function (res) {
					VerifyAgentFIDSuccess(res);
				});
			}
		}

		function VerifyAgentFIDSuccess(res) {
			console.log("masuk yah VErifi Success :" + JSON.stringify(res));
			if (res.invocationResult.respCode == 200) {
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
		function CheckIDEmailAgentDataSuccess(res) {
			if (res.invocationResult.emailId != null) {
				$rootScope.agent.email = res.invocationResult.emailId;
				$state.go("verifikasi-sms", { 'smsType': 'ForgetPRUForceID', 'userType': 'agent' });
			} else {
				console.log("harus dikasih pop up email not found");
				$rootScope.AlertDialog(msg.EmailNotFound);

			}
		}

	});