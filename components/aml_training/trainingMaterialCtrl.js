
angular.module('PruForce.controllers')
    .controller('trainingMaterialCtrl', function ($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

  $scope.data = {};
  $scope.data.currentPage = 1;
  $scope.data.slides = [
    { imgUrl: "img/slide1.jpg" },
    { imgUrl: "img/slide1.jpg" }, { imgUrl: "img/slide1.jpg" }, { imgUrl: "img/slide1.jpg" }, { imgUrl: "img/slide1.jpg" }, { imgUrl: "img/slide1.jpg" }, { imgUrl: "img/slide1.jpg" }
  ];

  $scope.zoomMin = 1;

  $scope.showImages = function (index) {
    $scope.activeSlide = index;
    $scope.showModal('components/aml_training/training-material-zoom.html');
  };

  $scope.showModal = function (templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.closeModal = function () {
    $scope.modal.hide();
    $scope.modal.remove()
  };

  $scope.updateSlideStatus = function (slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };

  $scope.next = function () {
    $ionicSlideBoxDelegate.next();
  };

  $scope.previous = function () {
    $ionicSlideBoxDelegate.previous();
  };

  var setupSlider = function () {
    $scope.data.sliderOptions = {
      initialSlide: 1,
      direction: 'horizontal',
      speed: 300
    };
  };

  $ionicSlideBoxDelegate.update();
});