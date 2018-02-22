/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('PruFastCtrl', function ($scope, $state) {
        $scope.login = function () {
            $scope.getFastStartType = function () {
                CandidatePackService.getFastStartType().then(
                    function (result) {
                        $scope.fastStartType = result;
                    },
                    function (error) {
                        console.log(error);
                    }
                )
            }

            $scope.getFastStartType();

            $scope.getFastStartSchedule = function () {
                CandidatePackService.getfastStartSchedule().then(
                    function (result) {
                        $scope.fastStartSchedule = result;
                    },
                    function (error) {
                        console.log(error);
                    }
                )
            }

            $scope.getFastStartLocation = function () {
                CandidatePackService.getFastStartLocation().then(
                    function (result) {
                        $scope.fastStartLocation = result;
                        //delete $scope.candidatePack.dataFastStart.trainingLocation;
                    },
                    function (error) {
                        console.log(error);
                    }
                )
            }

            $scope.getFastStartLocation();

            $scope.changeFastStartType = function () {
                if ($scope.candidatePack.dataFastStart.trainingType != 1) {
                    delete $scope.candidatePack.dataFastStart.trainingLocation;
                    delete $scope.candidatePack.dataFastStart.choosedTrainingId;
                }

                $scope.save();
            }
        }
    })