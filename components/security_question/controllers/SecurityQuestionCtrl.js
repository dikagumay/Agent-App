/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('SecurityQuestionCtrl', function ($scope, $rootScope, $state, $localStorage, $ionicPopup, $ionicLoading, SecurityQuestion, VerifySecurityQuestionService) {


        $scope.initModel = {};
        getQuestionFPSuccess(SecurityQuestion);
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

        $scope.Lanjut = function () {
            $ionicLoading.show();
            if ($scope.initModel.jawaban1 == undefined || $scope.initModel.jawaban2 == undefined) {
                $rootScope.AlertDialog("Jawaban dan Pertanyaan Tidak Boleh Kosong");
            } else {

                console.log("hasil select pertanyaan 1" + $scope.listSQ.selected1);
                console.log("hasil select pertanyaan 2" + $scope.listSQ.selected2);
                console.log("hasil select jawaban 1" + $scope.initModel.jawaban1);
                console.log("hasil select jawaban 2" + $scope.initModel.jawaban2);
                VerifySecurityQuestionService.invoke($scope.listSQ.selected1.aobdescriptionind, $scope.initModel.jawaban1, $scope.listSQ.selected2.aobdescriptionind, $scope.initModel.jawaban2, $rootScope.temp.pruforceId)
                    .then(function (res) {
                        VerifySQSuccess(res);
                    });
            }


        }
        function VerifySQSuccess(result) {
            $ionicLoading.hide();
            if (result.invocationResult.isSuccessful) {
                $rootScope.AlertDialog(msg.SuccessRegPRUforceID);
                $state.go("login");
                $rootScope.candidate = {};
                $rootScope.agent = {};
                $rootScope.temp = {};
            } else {
                console.log("result errror");
                $rootScope.AlertDialog(msg.FailedSaveSQ);
            }
        }

        $scope.BackToLogin = function () {
            $state.go("login");
        }

    });