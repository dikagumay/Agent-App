/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('LoginCtrl', function ($scope, $state, $rootScope, $ionicLoading, LoginService, DetailProfileService, $localStorage, $ionicPopup, InboxService) {
		$scope.user = {};
		$scope.login = function () {
			$state.go("daftar-newsqs");
		}
		// 	console.log("username :" + $scope.user.username);
		// 	if ($scope.user.username == undefined || $scope.user.password == undefined || $scope.user.username == "" || $scope.user.password == "") {
		// 		$rootScope.AlertDialog("Username atau password tidak boleh kosong");
		// 	} else {

		// 		$rootScope.username = $scope.user.username;
		// 		$ionicLoading.show();
		// 		LoginService.invoke($scope.user.username, $scope.user.password, "agen").then(function (res) {
		// 			getTokenSuccess(res);
		// 		});

		// 	}


		// }
		// function getTokenSuccess(res) {
		// 	if (res.invocationResult.isSuccessful) {
		// 		if (res.invocationResult.access_token != undefined || res.invocationResult.access_token == !null) {
		// 			$localStorage.access_token = res.invocationResult.access_token;
		// 			DetailProfileService.invoke($localStorage.access_token).then(function (res) {
		// 				getDetailProfileServiceSuccess(res);
		// 			});
		// 		} else {
		// 			$ionicLoading.hide();
		// 			$rootScope.AlertDialog("Username atau password Salah");
		// 		}

		// 	} else {
		// 		$rootScope.AlertDialog("Response Failed");
		// 	}
		// }

		// function getDetailProfileServiceSuccess(res) {
		// 	if (res.invocationResult.isSuccessful) {
		// 		if (res.invocationResult.agentId == null || res.invocationResult.agentId == undefined || res.invocationResult.agentId == "") {
		// 			$ionicLoading.hide();
		// 			$rootScope.AlertDialog("Maaf Agen Code anda tidak ada di dokumen kami");
		// 		} else {
		// 			$rootScope.agent.userType = res.invocationResult.userType;
		// 			if ($rootScope.agent.userType == "candidate") {
		// 				$rootScope.candidate.npa = res.invocationResult.agent.npaNumber;
		// 				$rootScope.candidate.userLoginName = res.invocationResult.agentName1;
		// 				CheckFSCA(g_npa);
		// 				CheckAAJICan(g_npa);
		// 				ChecksosmedCA(g_npa);
		// 				CheckScoreRecExamCA(g_npa);
		// 				CheckCountAG(g_npa);
		// 				CheckCountRecExamCA(g_npa);
		// 				CheckingSuppDocCAN(g_npa);
		// 				CheckCandidate(g_npa);
		// 				InboxService.invoke(result.invocationResult.agentId).then(function (res) {
		// 					getLengthInboxMessageSuccess(res);
		// 				});
		// 			} else {
		// 				$rootScope.agent.agentType = res.invocationResult.designationId[0].description;
		// 				$rootScope.agent.userLoginName = res.invocationResult.agentName1;
		// 				if ($rootScope.agent.agentType == 'AG') {
		// 					$rootScope.agent.leaderagentcode = res.invocationResult.parentAgencyId;
		// 				} else {

		// 					$rootScope.agent.code = res.invocationResult.agentId;
		// 					$rootScope.agent.agentOfficeCode = res.invocationResult.location[0].codeValue;
		// 					$rootScope.agent.email = res.invocationResult.emailId;
		// 					$rootScope.agent.phone = res.invocationResult.mobileNo;
		// 					$rootScope.agent.licenseType = res.invocationResult.licenseType;
		// 					$rootScope.agent.leaderagentcode = res.invocationResult.agentId;
		// 					$rootScope.agent.leaderName = res.invocationResult.agentName1;
		// 					$rootScope.agent.leaderOfficeCode = res.invocationResult.location[0].codeValue;
		// 				}
		// 				InboxService.invoke(res.invocationResult.agentId).then(function (res) {
		// 					getLengthInboxMessageSuccess(res);
		// 				});
		// 			}

		// 		}

		// 	} else {
		// 		$rootScope.AlertDialog("Response Failed for Get AgentProfile");
		// 	}

		// }


		// function CheckFSCA(npa) {

		// }
		// function CheckAAJICan(npa) {

		// }
		// function ChecksosmedCA(npa) {
		// }

		// function CheckScoreRecExamCA(npa) {

		// }
		// function CheckCountAG(npa) {

		// }
		// function CheckCountRecExamCA(npa) {

		// }
		// function CheckingSuppDocCAN(npa) {

		// }
		// function CheckCandidate(npa) {

		// }


		// function getLengthInboxMessageSuccess(res) {
		// 	//after set length go to homepage
		// 	$rootScope.inbox.Length = res.invocationResult.length;
		// 	$state.go("homepage");
		// 	$ionicLoading.hide();
		// }

	})