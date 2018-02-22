
angular.module('PruForce.controllers')
    .controller('SettingCtrl', function ($scope, $state) {
        $scope.ChangePassword = function () {
            $state.go("ganti-password");
        }
        $scope.AML = function () {
            $state.go("aml-training",{'curdate':'2016-10-28'});
        }
        
    });