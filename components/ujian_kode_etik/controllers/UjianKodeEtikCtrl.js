/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('UjianKodeEtikCtrl', function ($scope, $rootScope, $state, $ionicLoading, GetAMLQuestionList, SubmitUjianService) {

		$scope.initModel = {};
		var listQuestions = [];
		$scope.questionNo = 1;
		var flagQuestion = 0;
		var listAnswer = [];
		getQuestionSuccess(GetAMLQuestionList);

		function getQuestionSuccess(res) {
			if (res.invocationResult.isSuccessful) {
				for (var i = 0; i < res.invocationResult.result.length; i++) {
					var data = {};
					data.amlID = res.invocationResult.result[i].amlID;
					data.amlQuestion = res.invocationResult.result[i].amlQuestion;
					data.allChoice = [];
					data.allChoice.push(res.invocationResult.result[i].choiceA);
					data.allChoice.push(res.invocationResult.result[i].choiceB);
					data.allChoice.push(res.invocationResult.result[i].choiceC);
					data.allChoice.push(res.invocationResult.result[i].choiceD);
					listQuestions[i] = data;
				}
				$scope.listQuestions = listQuestions;
				$scope.question = listQuestions[flagQuestion].amlQuestion;
				$scope.listChoice = [];
				$scope.listChoice = listQuestions[flagQuestion].allChoice;
			}
		}


		$scope.SelectAnswer = function (amlID, answer, position) {
			console.log("amlID :" + amlID);
			listAnswer.push(answer);
			$rootScope.candidate.npa = "WQW0002764";
			if (listAnswer.length == listQuestions.length) {
				$ionicLoading.show();
				// this is based anabatic style request
				var amlID = listQuestions[0].amlID + ';' + listQuestions[1].amlID + ';' + listQuestions[2].amlID + ';' +
					listQuestions[3].amlID + ';' + listQuestions[4].amlID + ';' + listQuestions[5].amlID + ';' +
					listQuestions[6].amlID + ';' + listQuestions[7].amlID + ';' + listQuestions[8].amlID + ';' +
					listQuestions[9].amlID + ';' + listQuestions[10].amlID + ';' + listQuestions[11].amlID + ';' +
					listQuestions[12].amlID + ';' + listQuestions[13].amlID + ';' + listQuestions[14].amlID + ';' +
					listQuestions[15].amlID + ';' + listQuestions[16].amlID + ';' + listQuestions[17].amlID + ';' +
					listQuestions[18].amlID + ';' + listQuestions[19].amlID + ';';
				console.log("hasil amlid" + amlID.split(';'));

				var amlExamAnswer = listAnswer[0] + ';' + listAnswer[1] + ';' + listAnswer[2] + ';' +
					listAnswer[3] + ';' + listAnswer[4] + ';' + listAnswer[5] + ';' +
					listAnswer[6] + ';' + listAnswer[7] + ';' + listAnswer[8] + ';' +
					listAnswer[9] + ';' + listAnswer[10] + ';' + listAnswer[11] + ';' +
					listAnswer[12] + ';' + listAnswer[13] + ';' + listAnswer[14] + ';' +
					listAnswer[15] + ';' + listAnswer[16] + ';' + listAnswer[17] + ';' +
					listAnswer[18] + ';' + listAnswer[19] + ';';
				console.log("hasil amlid" + amlExamAnswer.split(';'));
				SubmitUjianService.invoke($rootScope.candidate.npa, amlID, amlExamAnswer).then(function (res) {
					SubmitUjianSuccess(res);
				});
			}

		}
		$scope.nextQuestions = function () {
			$("input:radio").removeAttr("checked");
			$scope.questionNo++;
			flagQuestion++;
			$scope.question = listQuestions[flagQuestion].amlQuestion;
			$scope.listChoice = [];
			$scope.listChoice = listQuestions[flagQuestion].allChoice;
		}

		$scope.backToQuestion = function () {
			if (flagQuestion == 0) {
				$state.go("homepage");
			} else {
				// this is used for remove last answer before back
				listAnswer.splice((flagQuestion - 1), 1);
				console.log("jumlah skrg  mundur :" + listAnswer.length);
				flagQuestion--;
				$scope.questionNo--;
				$scope.question = listQuestions[flagQuestion].amlQuestion;
				$scope.listChoice = [];
				$scope.listChoice = listQuestions[flagQuestion].allChoice;
			}

		}

		function SubmitUjianSuccess(res) {
			if (res.invocationResult.respCode == 200) {
				$ionicLoading.hide();
				$state.go("nilai-kelayakan-calon-agen", { 'scoreUjian': res.invocationResult.result.totalScore });
			}
		}



	})