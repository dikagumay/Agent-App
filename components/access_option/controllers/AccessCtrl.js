/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('AccessCtrl', function ($scope, $state, $ionicPopup, $stateParams) {

        $scope.Agent = function () {
            console.log("access :"+$stateParams.access_type);
            switch ($stateParams.access_type) {
                case "daftar_pruforceId":
                    $state.go("daftar-pruforceId-with-sfa");
                    break;
                case "lupa_pruforceId":
                    $state.go("lupa-pruforceId-agen");
                    break;
                case "lupa_pertanyaan_rahasia":
                    $state.go("lupa-pertanyaan-rahasia-agen");
                    break;
            }
        }

        $scope.CalonAgent = function () {

            switch ($stateParams.access_type) {
                case "daftar_pruforceId":
                    $state.go("daftar-pruforceId-calon-agen");
                    break;
                case "lupa_pruforceId":
                    $state.go("lupa-pruforceId-calon-agen");
                    break;
                case "lupa_pertanyaan_rahasia":
                    $state.go("lupa-pertanyaan-rahasia-calon-agen");
                    break;
            }
        }

    })