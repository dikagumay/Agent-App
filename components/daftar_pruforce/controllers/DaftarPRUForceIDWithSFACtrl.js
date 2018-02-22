/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('DaftarPRUForceIDWithSFACtrl', function ($scope, $rootScope, $ionicLoading, $state, $localStorage, $ionicPopup, VerifyAgentSFAService,GetPRUForceIDService) {


        $scope.initModel = {};

        $scope.LoginSFA = function () {
            if ($scope.initModel.agentCode_sfaId == undefined || $scope.initModel.password == undefined) {
                $rootScope.AlertDialog(msg.mandatoryFields);
            } else {
                $ionicLoading.show();
                $rootScope.agent.code = $scope.initModel.agentCode_sfaId;
                VerifyAgentSFAService.invoke($scope.initModel.agentCode_sfaId, $scope.initModel.password).then(function (res) {
                    VerifyAgentSFASuccess(res);
                });
            }

        }


        function VerifyAgentSFASuccess(res) {
            console.log("masuk yah VErifi Success :" + JSON.stringify(res));
            if (res.invocationResult.isSuccessful) {
                $rootScope.agent.code = res.invocationResult.agentId;
                CekSalesForceID();
            } else {
                $ionicLoading.hide();
                $rootScope.AlertDialog("Gagal Login " + res.invocationResult.errorCode);
                $scope.initModel.agentCode_sfaId = "";
                $scope.initModel.password = "";
            }

        }

        function CekSalesForceID() {
            //flag aob service
            var npa = "";
            GetPRUForceIDService.invoke($rootScope.agent.code, npa).then(function (res) {
                GetPRUForceIDSuccess(res);
            });
        }
        function GetPRUForceIDSuccess(res) {
            $ionicLoading.hide();
            if (res.invocationResult.errorCode == 000000) {
                $rootScope.AlertDialog(msg.PRUforceId_ag_exist);
            } else {
                $state.go("create-pruforce-id", { 'type': 'createPRUForceIDWithSFA' });
            }
        }


    });