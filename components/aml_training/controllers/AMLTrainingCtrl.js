
angular.module('PruForce.controllers')
    .controller('AMLTrainingCtrl', function ($scope, $state, $filter, $ionicLoading, $rootScope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate, GetAMLTrainingSlide) {
        $scope.data = {};
        $scope.data.currentPage = 1;
        $scope.data.slides = [];
        var listAllSlides = [];
        getAMLTrainingSuccess(GetAMLTrainingSlide);
        function getAMLTrainingSuccess(res) {
            if (res.invocationResult.isSuccessful) {
                $ionicLoading.hide();
                for (var i = 0; i < res.invocationResult.result.length; i++) {
                    var data = {};
                    data.number = res.invocationResult.result[i].number;
                    data.fileName = res.invocationResult.result[i].fileName;
                    data.imageFile = res.invocationResult.result[i].fileData;
                    listAllSlides[i] = data;
                }
                $scope.data.slides = listAllSlides;
            } else {
                console.log("error masuk data");
            }
        }

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
            console.log("tessss " + $ionicSlideBoxDelegate.currentIndex() + "jumlah slide" + $ionicSlideBoxDelegate.slidesCount());
            if ($ionicSlideBoxDelegate.currentIndex() == ($ionicSlideBoxDelegate.slidesCount() - 1)) {
                $rootScope.DialogEvents(msg.AMLT_done,"homepage");
            } else {
                $ionicSlideBoxDelegate.next();
            }
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