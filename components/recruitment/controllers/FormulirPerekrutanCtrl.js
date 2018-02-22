/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('FormulirPerekrutanCtrl', function ($scope, $ionicPopup, GetRecExam) {

        var listQuestions = [];
        $scope.initModel = {};
        getRecExamSuccess(GetRecExam);
        function getRecExamSuccess(res) {
            if (res.invocationResult.isSuccessful) {

                for (var i = 0; i < res.invocationResult.result.length; i++) {
                    console.log("hasil result :" + res.invocationResult.result);
                    var data = {};
                    data.qno = res.invocationResult.result[i].qno;
                    data.question = res.invocationResult.result[i].question;
                    data.answers = res.invocationResult.result[i].answers;
                    listQuestions[i] = data;
                    $scope.initModel['question' + (i + 1)] = "0";
                }
            }
            $scope.listQuestions = listQuestions;
        }
        $scope.TotalNilai = function () {
            $scope.score = parseInt($scope.initModel.question1) + parseInt($scope.initModel.question2)+ parseInt($scope.initModel.question3)
            +parseInt($scope.initModel.question4)+parseInt($scope.initModel.question5)+parseInt($scope.initModel.question6)+parseInt($scope.initModel.question7)+parseInt($scope.initModel.question8)
            +parseInt($scope.initModel.question9)+parseInt($scope.initModel.question10)+parseInt($scope.initModel.question11)+parseInt($scope.initModel.question12)+parseInt($scope.initModel.question13)
            +parseInt($scope.initModel.question14)+parseInt($scope.initModel.question15);
        }

        if( $scope.score<55){
            $scope.resultDesc = "anda tidak memenuhi kriteria";
        }else{
            $scope.resultDesc = "anda memenuhi kriteria";
        }

        $scope.AplicationPack = function(){
            $state.go("data-kandidat-pack");
        }

    })


