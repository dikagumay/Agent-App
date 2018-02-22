/**
 * 
 */
angular.module('PruForce.controllers')
	.controller('DetailNotifSignCtrl', function ($scope, $state, $stateParams, $ionicModal, getCreateDate, GetCandidatePackService, SignatureService) {

		var listDetailInbox = [];
		getCreateDateSuccess(getCreateDate);
		function getCreateDateSuccess(res) {
			console.log("hasilnya detail notif:" + JSON.stringify(res));
			console.log("npanya adalah :" + $stateParams.npa);
			GetCandidatePackService.invoke($stateParams.npa).then(function (res) {
				getDataAplicationPackSuccess(res);
			});
		}

		function getDataAplicationPackSuccess(res) {
			console.log("hasilnya aplpack:" + JSON.stringify(res));
			var data = {};
			data.candidateName = res.invocationResult.candidateName;
			data.reason = res.invocationResult.reason;
			$scope.candidateName = data.candidateName;
			console.log("hasilnya detail notif: nama candidate" + $scope.candidateName);
		}

		// this is start using image sign and image upload and crop
		$scope.notifsign = {};
		$scope.notifsign.all_image = {};
		$scope.signature = SignatureService.signature().getSignatureData();
		$scope.landscapeImage = null;
		$scope.landscapeImageRotation = 0;
		$scope.landscapeOutputImage = null;
		$scope.potraitImage = null;
		$scope.potraitImageRotation = 0;
		$scope.potraitOutputImage = null;
		console.log("masuk data sign:" + $scope.signature);

		$ionicModal.fromTemplateUrl('components/modal/landscape-photo.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.landscapePhotoModal = modal;
		});
		$scope.openLandscapeModal = function (img, uploadTo) {
			console.log($scope);
			$scope.landscapeImage = img;
			$scope.landscapePhotoModal.show();
			$(".landscape-upload-modal .button.button-header-clear").attr("data-upload-model", uploadTo);
		};
		$scope.closeLandscapeModal = function () {
			$scope.landscapePhotoModal.hide();
		};

		$ionicModal.fromTemplateUrl('components/modal/potrait-photo.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.potraitPhotoModal = modal;
		});
		$scope.openPotraitModal = function (img, uploadTo) {
			$scope.potraitImage = img;
			$scope.potraitPhotoModal.show();
			$(".potrait-upload-modal .button.button-header-clear").attr("data-upload-model", uploadTo);
		};
		$scope.closePotraitModal = function () {
			$scope.potraitPhotoModal.hide();
		};

		$scope.rotateImagePotrait = function () {
			console.log("testsststts masuk");
			$scope.potraitImageRotation += 90;
		}

		$scope.rotateImageLandscape = function () {
			$scope.landscapeImageRotation += 90;
		}

		$scope.useLandspacePhoto = function (e) {
			var initSourceInput = $(e.toElement).attr("data-upload-model").split(".");
			var imageResult = $("#landspaceResult").attr("src");
			$scope[initSourceInput[0]][initSourceInput[1]][initSourceInput[2]] = imageResult;
			// $scope.save();
			$scope.closeLandscapeModal();
		}

		$scope.usePotraitPhoto = function (e) {
			var initSourceInput = $(e.toElement).attr("data-upload-model").split(".");
			var imageResult = $("#potraitResult").attr("src");
			$scope[initSourceInput[0]][initSourceInput[1]][initSourceInput[2]] = imageResult;
			// $scope.save();
			$scope.closePotraitModal();
		}

		// End of function

	});