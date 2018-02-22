/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('LupaPasswordCtrl', function ($scope, $state, QuestionFP, $localStorage, $ionicPopup, $ionicLoading, VerifySecurityQuestionService) {

		$scope.initModel = {};
		getQuestionFPSuccess(QuestionFP);

		function getQuestionFPSuccess(result) {
			if (result.invocationResult.isSuccessful) {
				var listQuestion = [];
				if (result.invocationResult.array != null) {
					for (var i = 0; i < result.invocationResult.array.length; i++) {
						var dataSQ = {};
						dataSQ.aobdescriptionind = result.invocationResult.array[i].aobdescriptionind;
						dataSQ.aobsystemcodeid = result.invocationResult.array[i].aobsystemcodeid;
						dataSQ.aobitem = result.invocationResult.array[i].aobitem;
						listQuestion[i] = dataSQ;
					}
					$scope.listQuestionAll = listQuestion;
					$scope.listSQ = {
						selected1: listQuestion[0],
						selected2: listQuestion[3]
					};

				} else {
					console.log("no data found");
				}

			} else {
				console.log("result errror");
			}

		}

		$scope.verifySQSubmit = function () {
			$ionicLoading.show();
			if ($scope.initModel.jawaban1 == undefined || $scope.initModel.jawaban2 == undefined) {
				$rootScope.AlertDialog(msg.mandatoryFields);
			} else {

				console.log("hasil select pertanyaan 1" + $scope.listSQ.selected1);
				console.log("hasil select pertanyaan 2" + $scope.listSQ.selected2);
				console.log("hasil select jawaban 1" + $scope.initModel.jawaban1);
				console.log("hasil select jawaban 2" + $scope.initModel.jawaban2);
				VerifySecurityQuestionService.invoke($scope.listSQ.selected1.aobdescriptionind, $scope.listSQ.selected2.aobdescriptionind, $scope.initModel.jawaban1, $scope.initModel.jawaban2, $scope.initModel.pruforceId)
					.then(function (res) {
						VerifySecurityQuestionSuccess(res);
					});
			}


		}
		function VerifySecurityQuestionSuccess(result) {
			$ionicLoading.hide();
			if (result.invocationResult.respCode == 200) {
				$state.go("new-pass");
			} else {
				$rootScope.AlertDialog(msg.IncorrectSQ);
			}

		}

	})