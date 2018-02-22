var pruforce = angular.module('PruForce');

pruforce.controller('calonAgenCtrl', function ($scope, $ionicPopup) {
  // using this for init radio button.

  $scope.failurePopup = function (e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: 'Anda dapat mengikuti Ujian Peraturan dan Kode Etik Perusahaan.',
      cssClass: 'pru-alert lowercase pru-logo-text',
      scope: $scope,
      buttons: [
        {
          text: 'lanjut',
          type: 'button-assertive',
          onTap: function (e) {
            window.location = "#/ujian-peraturan-dan-kode-etik";
          }
        }
      ]
    });
  };
  $scope.dataNotifications = [
    { category: "Perkenalan Agen Baru", status: "NEW", time: "4 menit lalu", notif: "Anda belum menyelesaikan materi training Kode Etik Perusahaan", icon: "ion-clipboard" },
    { category: "Rekrutmen", status: "NEW", time: "1 jam lalu", notif: "Dokumen KTP Anda diperlukan untuk melengkapi proses pengajuan aplikasi sebagai Agen Prudential", icon: "ion-ribbon-b" },
    { category: "Rekrutmen", status: "NEW", time: "4 jam lalu", notif: "Anda belum melengkapi dokumen KTP, Alamat Rumah, Email, dan Nomor Rekening Anda untuk proses pengajuan pendaftaran Calon Agen Prudential. Segera Rekruiter Anda.", icon: "ion-clipboard" },
    { category: "Perkenalan Agen Baru", status: "NEW", time: "kemarin", notif: "Anda belum mendaftarkan diri untuk mengikuti ujian AAJI.", icon: "ion-clipboard" },
    { category: "Rekrutmen", status: "NEW", time: "minggu lalu", notif: "Anda belum menyelesaikan materi training Kode Etik Perusahaan", icon: "ion-clipboard" }

  ]

  $scope.dataQuest1 = [
    { id: "1", quest: "6 Bulan XX" },
    { id: "2", quest: "7 Bulan" },
    { id: "3", quest: "8 Bulan" },
    { id: "4", quest: "6 Bulan" }
  ]
  $scope.dataQuest2 = [
    { id: "5", quest: "Placement, Layering, dan integration" },
    { id: "6", quest: "Basic, Intermediate, dan Integration XX" },
    { id: "7", quest: "Basic,  Intermediate, dan Integration XX" },
    { id: "8", quest: "Integration, Mutualism, dan Capitalism" }
  ]
  $scope.dataQuest3 = [
    { id: "9", quest: "Perbankan Sekuritas" },
    { id: "10", quest: "Perbankan" },
    { id: "11", quest: "Perusahaan Asuransi" },
    { id: "12", quest: "Jawaban 1, 2, 3 benar XX" }
  ]

  $scope.ujianPeraturanDanKodeEtikQ1 = function () {
    window.location = "#/ujian-kode-etik-perusahaan-q1";
  };
  $scope.ujianPeraturanDanKodeEtikQ2 = function () {
    window.location = "#/ujian-kode-etik-perusahaan-q2";
  };
  $scope.ujianPeraturanDanKodeEtikQ3 = function () {
    window.location = "#/ujian-kode-etik-perusahaan-q3";
  };
  $scope.ujianPeraturanDanKodeEtikLulus = function () {
    window.location = "#/ujian-kode-etik-perusahaan-lulus";
  };
  $scope.ujianPeraturanDanKodeEtikSelesai = function () {
    window.location = "#/homepage-calon-agen";
  };
  angular.element(document).ready(function () {
  });
  $scope.DetailNotif = function () {
    console.log("tes detail notif");
    var testDetail = "sign";
    switch (testDetail) {
      case "sign":
        DetailNotifSign();
        break;
      default:
        break;
    }
		}

		function DetailNotifSign() {

		}
  $scope.SelectAnswer = function (answer) {
    console.log("pilih jawabannya " + answer);
  }
});