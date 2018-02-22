var pruforce = angular.module('PruForce');

pruforce.controller('registerCtrl', function($scope, $ionicPopup) {
  $scope.successPopup = function(e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: "<strong class='assertive'>PRU</strong><em>force</em> ID Berhasil Terdaftar",
      cssClass: 'pru-alert pru-logo-text',
      scope: $scope,
      buttons: [
      {
        text: "login dengan <strong css='assertive'>PRU</strong><em>force</em> ID",
        type: 'button-assertive',
        onTap: function(e) {
        }
      }
      ]
    });
  };

  angular.element(document).ready(function() {
  });
});