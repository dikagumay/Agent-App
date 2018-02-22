/**
 * 
 */
angular.module('PruForce.controllers')

    .controller('DaftarRekrutmentCtrl', function ($scope, $ionicPopup, $timeout) {
        
        $scope.recruitCandidate = [
            {
                id: 2,
                name: "Harvey Specter 2",
                progress_total: "90%",
                progress_status: "success",
                progress_detail: "90% selesai"
            },
            {
                id: 1,
                name: "Harvey Specter",
                progress_total: "50%",
                progress_status: "warning",
                progress_detail: "50% selesai"
            }
        ];

        $scope.completedNotification = function (e) {
            var myPopup = $ionicPopup.show({
                title: "<strong>PRU</strong><em>force</em>",
                template: 'APLIKASI BERHASIL DIAJUKAN.',
                cssClass: 'pru-alert pru-logo-text',
                scope: $scope,
                buttons: [{
                    text: 'LANJUT',
                    type: 'button-assertive',
                    onTap: function (e) {
                    }
                }]
            });
        };

        var ids = 3

        $scope.doRefresh = function () {

            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            console.log('Refreshing!');
            $timeout(function () {
                //simulate async response
                for (var i = 1; i <= 2; i++) {
                    var percentage = Math.floor(Math.random() * 99) + 4;
                    if (percentage <= 50) {
                        progress_status = "warning";
                    } else {
                        progress_status = "success"
                    }
                    $scope.recruitCandidate.push({ id: ids, name: possible.charAt(Math.floor(Math.random() * possible.length)), progress_total: percentage + "%", progress_status: progress_status, progress_detail: "50% selesai" });
                    ids = ids + 1;
                }

                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');

            }, 1000);

        };
    })


