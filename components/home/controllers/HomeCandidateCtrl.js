/**
 * 
 */
angular.module('PruForce.controllers')

	.controller('HomeCandidateCtrl', function ($scope, $rootScope, $state, $ionicLoading, $ionicPopup, $localStorage, $filter) {

		if ($rootScope.agent.userType == 'AGENT') {
			$scope.userLogin = $rootScope.agent.userLoginName;
			console.log("tesss nama :" + $scope.userLogin);
			$scope.MenuList = {
				'supportmenu': true,
				'rekrutment': true,
				'newsqs': true
			};
		} else {
			$scope.MenuList = {
				'supportmenu': true,
				'rekrutment': false,
				'newsqs': true
			};
		}


		$scope.status_kode_etik = "Belum dimulai";
		$scope.status_training = "Belum dimulai";
		$scope.status_ujian = "Belum dimulai";
		$scope.status_data_kandidat = "Belum dimulai";

		$scope.logout = function () {
			var myPopup = $ionicPopup.show({
				title: "<strong>PRU</strong><em>force</em>",
				template: 'Apakah anda yakin keluar',
				cssClass: 'pru-alert pru-logo-text',
				scope: $scope,
				buttons: [
					{
						text: 'OK',
						type: 'button-assertive',
						onTap: function (e) {
							$state.go("login");
							WL.Client.reloadApp();
						}
					}, {
						text: 'Cancel',
						type: 'button-assertive',
						onTap: function (e) {
						}
					}
				]
			});

		}

		$scope.setting = function () {
			$state.go("setting");
		}
		$scope.listnotif = function () {
			$state.go("notifikasi-user", { 'userId': $rootScope.agent.code });
		}
		$scope.rekrutment = function () {
			if ($rootScope.agent.licenseType == null || $rootScope.agent.licenseType == undefined || $rootScope.agent.licenseType == '') {
				$rootScope.AlertDialog("Anda belum memiliki license AAJI atau license AAJI Anda sudah kadaluarsa. Silakan mengikuti ujian AAJI kembali");
			} else {
				$state.go("daftar-rekrutment");
			}

		}

		$scope.newsqs = function () {
			$state.go("daftar-newsqs");
		}

		$scope.GoAMLTraining = function () {
			$ionicLoading.show();
			var getDateNow = $filter('date')(new Date(), 'yyyy-MM-dd');
			console.log("MASUK GAK" + getDateNow);
			$state.go("aml-training", { 'curdate': getDateNow });
		}
		$scope.GoUjianKodeEtik = function () {
			$state.go("ujian-kode-etik-perusahaan");
		}

	})