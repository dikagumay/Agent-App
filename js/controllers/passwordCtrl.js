var pruforce = angular.module('PruForce');

pruforce.controller('passwordCtrl', function($scope, $ionicPopup) {
  function init() {
    setTimeout(function(){
      $('.selectpicker').selectpicker('toggle');
    }, 100);
  }

  $scope.failurePopup = function(e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: 'Permintaan tidak berhasil di proses. silahkan periksa koneksi Anda.',
      cssClass: 'pru-alert pru-logo-text',
      scope: $scope,
      buttons: [
      {
        text: 'Ulangi verifikasi data',
        type: 'button-assertive',
        onTap: function(e) {
        }
      },
      {
        text: 'kembali ke halaman login',
        type: 'button-assertive',
        onTap: function(e) {
        }
      }
      ]
    });
  };

  $scope.failureChangPassPopup = function(e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: 'Pembuatan password baru tidak berhasil',
      cssClass: 'pru-alert pru-logo-text',
      scope: $scope,
      buttons: [
      {
        text: 'Ulangi',
        type: 'button-assertive',
        onTap: function(e) {
        }
      },
      {
        text: 'kembali ke halaman login',
        type: 'button-assertive',
        onTap: function(e) {
        }
      }
      ]
    });
  };

  $scope.samePassPopup = function(e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: 'Anda masih menggunakan password lama',
      cssClass: 'pru-alert pru-logo-text',
      scope: $scope,
      buttons: [
      {
        text: 'Ulangi',
        type: 'button-assertive',
        onTap: function(e) {
        }
      }
      ]
    });
  };

  $scope.failurConfirmPassPopup = function(e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: 'Password konfirmasi yang anda masukan tidak sama',
      cssClass: 'pru-alert pru-logo-text',
      scope: $scope,
      buttons: [
      {
        text: 'Ulangi',
        type: 'button-assertive',
        onTap: function(e) {
        }
      }
      ]
    });
  };


  $scope.successCreatePassPopup = function(e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: 'Password baru berhasil dibuat',
      cssClass: 'pru-alert pru-logo-text',
      scope: $scope,
      buttons: [
      {
        text: 'Login',
        type: 'button-assertive',
        onTap: function(e) {
        }
      }
      ]
    });
  };
  angular.element(document).ready(function() {
    init();
  });
});