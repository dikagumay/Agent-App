/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('FormulirRegistrasiCtrl', function ($scope, $rootScope, $state, $ionicPopup, $timeout, $filter, $ionicLoading, GenerateNPAService, CheckEmailExistService) {

        $scope.candidateRegister = {};

        $scope.simpanAction = function () {
            $state.go("daftar-rekrutment", { id });
        }
        $scope.lanjutAction = function () {
            if ($scope.candidateRegister.name == undefined || $scope.candidateRegister.date == undefined || $scope.candidateRegister.numberktp == undefined || $scope.candidateRegister.email == undefined
                || $scope.candidateRegister.phone == undefined) {
                $rootScope.AlertDialog(msg.mandatoryFields)
            } else {
                $ionicLoading.show();
                CheckEmailExistService.invoke($scope.candidateRegister.email, $scope.candidateRegister.phone).then(function (res) {
                    CheckEmailSuccess(res);
                });
            }

        }
        function CheckEmailSuccess(res) {
            if (res.invocationResult.isSuccessful) {
                if (res.invocationResult.array.length != 0) {
                    $ionicLoading.hide();
                    $rootScope.AlertDialog(msg.emailExist);
                } else {
                    GenerateNPA();
                }
            } else {
                $ionicLoading.hide();
                $rootScope.AlertDialog("Maaf Tidak Bisa Di Proses");
            }

        }
        function GenerateNPA() {
            var dateOfBirth = $filter('date')($scope.candidateRegister.date, 'yyyy-MM-dd');
            console.log(" tanggal : " + dateOfBirth);
            var recruitername = $rootScope.agent.userLoginName;
            var recruiteragentcode = $rootScope.agent.code;
            var recruiterofficecode = $rootScope.agent.agentOfficeCode;
            var leadername = $rootScope.agent.leaderName;
            var leaderagentcode = $rootScope.agent.leaderagentcode;
            var leaderofficecode = $rootScope.agent.leaderOfficeCode;
            GenerateNPAService.invoke($scope.candidateRegister.name, dateOfBirth, $scope.candidateRegister.email,
                $scope.candidateRegister.numberktp, $scope.candidateRegister.phone, recruitername, recruiteragentcode, recruiterofficecode, leadername, leaderagentcode, leaderofficecode).then(function (res) {
                    GenerateNPASuccess(res);
                });
        }
        function GenerateNPASuccess(res) {
            if (res.invocationResult.isSuccessful) {
                $ionicLoading.hide();
                console.log("npa number 1:" + JSON.stringify(res.invocationResult.result));
                $scope.npaNumber = res.invocationResult.result.npaNumber;
                $scope.candidateName = res.invocationResult.result.candidateName;
                $scope.candidateIdCardNo = res.invocationResult.result.candidateIdCardNo;
                $scope.candidateCellularNo1 = res.invocationResult.result.candidateCellularNo1;
                $scope.candidateEmail = res.invocationResult.result.candidateEmail;
                $state.go("npa-received", { 'npa': $scope.npaNumber, 'candidateName': $scope.candidateName, 'candidateIdCardNo': $scope.candidateIdCardNo, 'candidateCellularNo1': $scope.candidateCellularNo1, 'candidateEmail': $scope.candidateEmail });

            } else {

            }
        }
    })


