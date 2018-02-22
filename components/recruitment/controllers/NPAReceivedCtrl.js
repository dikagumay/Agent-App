/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('NPAReceivedCtrl', function ($scope, $rootScope,$stateParams, $state, $ionicPopup) {


        $scope.npaNumber = $stateParams.npa;
        console.log("npanya :"+$stateParams.npa);
        $scope.tutupAction = function () {
            $state.go("login");
        }
        $scope.lanjutAction = function () {
            $state.go("formulir-perekrutan",{ 'npa': $stateParams.npaNumber, 'candidateName':$stateParams.candidateName  ,'candidateIdCardNo':$stateParams.candidateIdCardNo, 
                    'candidateCellularNo1':$stateParams.candidateCellularNo1,'candidateEmail':$stateParams.candidateEmail});
        }

    })


