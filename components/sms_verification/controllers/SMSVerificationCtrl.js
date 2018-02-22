
angular.module('PruForce.controllers')
    .controller('SMSVerificationCtrl', function ($scope, $rootScope, $state, $ionicLoading, $stateParams, SMSVerificationService, SendForgetPRUForceIDService) {

        $scope.initModel = {};

        $scope.VerifySMS = function () {
            console.log("tess");
            $ionicLoading.show();
            if ($stateParams.userType == "agent") {
                SMSVerificationService.invokeByAgent($rootScope.agent.code, $scope.initModel.smstoken).then(function (res) {
                    SMSVerifySuccess(res);
                });
            } else if ($stateParams.userType == "candidate") {
                SMSVerificationService.invokeByCandidate($rootScope.candidate.npa, $scope.initModel.smstoken).then(function (res) {
                    SMSVerifySuccess(res);
                });
            }

        }

        //this is used for verify register candidate and agent
        function SMSVerifySuccess(res) {
            $ionicLoading.hide();
            console.log("isi res :" + JSON.stringify(res.invocationResult));
            if (res.invocationResult.respCode == 200) {
                console.log("isi res 1:");
                switch ($stateParams.smsType) {
                    case "DaftarPRUForceID":
                        CreatePRUForceID();
                        break;
                    case "ForgetPRUForceID":
                        CheckPRUForceIDExist();
                        break;
                    case "ForgetSecurityQuestion":
                        $state.go("new-pass");
                        break;
                }

            } else {
                $rootScope.AlertDialog(msg.IncorrectSMS);
                console.log("result errror");
            }
        }

        function CreatePRUForceID() {
            if ($stateParams.userType == "agent") {
                $state.go("create-pruforce-id", { 'type': 'createPRUForceIDAgent' });
            } else if ($stateParams.userType == "candidate") {
                $state.go("create-pruforce-id", { 'type': 'createPRUForceIDCandidate' });
            }
        }


        function CheckPRUForceIDExist() {
            if ($stateParams.userType == "agent") {
                // aob service flag
                var npa_flag = "0";
                SendForgetPRUForceIDService.invoke($rootScope.agent.npa, npa_flag, $rootScope.agent.email).then(function (res) {
                    CheckPRUForceIDExistSucccess(res);
                });
            } else {
                // different flow for candidate
                CheckIDEmailService.invokeByCandidate($rootScope.candidate.npa).then(function (res) {
                    CheckIDEmailDataCandidateSuccess(res);
                });

            }
        }


        function CheckIDEmailDataCandidateSuccess(res) {

            if (res.invocationResult.respCode == 200) {
                if (res.invocationResult.result.activeflag != 'EXPIRED') {
                    $rootScope.candidate.email = res.invocationResult.result.candidateEmail;
                    // aob service flag
                    var agent_flag = "0";
                    SendForgetPRUForceIDService.invoke(agent_flag, $rootScope.candidate.npa, $rootScope.candidate.email).then(function (res) {
                        CheckPRUForceIDExistSucccess(res);
                    });
                } else {
                    $rootScope.AlertDialog(msg.NPAInactive);
                }
            } else {
                $rootScope.AlertDialog(msg.DataNotFound1);

            }
        }

        function CheckPRUForceIDExistSucccess(res) {
            if (res.invocationResult.errorCode == 000000) {
                $rootScope.AlertDialog(msg.PRUforceIDSent);
                $rootScope.candidate = {};
                $rootScope.agent = {};
                $state.go("login");
            } else {
                $rootScope.AlertDialog(res.invocationResult.errorMessage);
            }

        }


        // this is used for resend sms token

        $scope.ResendSMSToken = function () {
            if ($stateParams.userType == "agent") {
                $ionicLoading.show();
                var dateOfBirth = $filter('date')($scope.agent.dob, 'yyyy-MM-dd');
                AgentVerifyingDataService.invoke($scope.agent.code, $scope.agent.idcardno, dateOfBirth, $scope.agent.phonenumber).then(function (res) {
                    ResendSMSSuccess(res);
                });

            } else if ($stateParams.userType == "candidate") {
                $ionicLoading.show();
                CandidateVerifyingDataService.invoke($scope.candidate.npa, $scope.candidate.name, $scope.candidate.idcardno, $scope.candidate.checksalesforceidflag).then(function (res) {
                    ResendSMSSuccess(res);
                });
            }
        }

        function ResendSMSSuccess(res) {
            if (res.invocationResult.respCode == 200) {
                console.log("resend sms successs");
                $ionicLoading.hide();
            } else {
                $rootScope.AlertDialog(msg.failedSendSMS);
            }

        }

    });