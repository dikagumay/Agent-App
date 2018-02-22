/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('DaftarPRUForceIDNoSFACtrl', function ($scope, $rootScope, $state, $ionicLoading, $localStorage, $ionicPopup, AgentVerifyingDataService) {


        $scope.initModel = {};

        $scope.VerifyAgent = function () {
            if ($scope.initModel.agentCode == undefined || $scope.initModel.dob == undefined || $scope.initModel.idcardno == undefined || $scope.initModel.phonenumber == undefined) {
                $rootScope.AlertDialog(msg.mandatoryFields);
            } else {
                $ionicLoading.show();
                $rootScope.agent.code = $scope.initModel.agentCode;
                $rootScope.agent.dob = $scope.initModel.dob;
                $rootScope.agent.idcardno = $scope.initModel.idcardno;
                $rootScope.agent.phonenumber = $scope.initModel.phonenumber;
                var dateOfBirth = $filter('date')($scope.initModel.dob, 'yyyy-MM-dd');
                AgentVerifyingDataService.invoke($scope.initModel.agentCode, $scope.initModel.idcardno, dateOfBirth, $scope.initModel.phonenumber).then(function (res) {
                    VerifyAgentNoSFASuccess(res);
                });
            }

        }


        function VerifyAgentNoSFASuccess(res) {
            console.log("masuk yah VErifi Success :" + JSON.stringify(res));
            if (res.invocationResult.respCode == 200) {
                CheckEmailDataAgentNoSFA();
            } else {
                $ionicLoading.hide();
                $rootScope.AlertDialog(msg.DataNotFoundAgency);
                $scope.initModel.agentCode = "";
                $scope.initModel.dob = "";
                $scope.initModel.idcardno = "";
                $scope.initModel.phonenumber = "";
            }

        }

        function CheckEmailDataAgentNoSFA() {
            //flag aob service
            CheckIDEmailService.invokeByAgent($rootScope.agent.code).then(function (res) {
                CheckIDEmailAgentDataSuccess(res);
            });
        }

        function CheckIDEmailAgentDataSuccess(res) {
            if (result.invocationResult.emailId != null) {
                $rootScope.agent.email = result.invocationResult.emailId;
                CekSalesForceIDNoSFA();
            } else {
                console.log("harus dikasih pop up email not found");
                $rootScope.AlertDialog(msg.EmailNotFound);
            }
        }


        function CekSalesForceIDNoSFA() {
            //flag aob service
            var npa = "";
            GetPRUForceIDService.invoke($rootScope.agent.code, npa).then(function (res) {
                GetPRUForceIDSuccess(res);
            });
        }
        function GetPRUForceIDSuccess(res) {
            $ionicLoading.hide();
            if (result.invocationResult.errorCode == 000000) {
                $rootScope.AlertDialog(msg.PRUforceId_ag_exist);
            } else {
                $state.go("verifikasi-sms", { 'smsType': 'DaftarPRUForceID', 'userType': 'agent' });
            }
        }

    });