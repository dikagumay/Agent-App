
angular.module('PruForce.controllers')
    .controller('SignatureCtrl', function ($scope, $state, $stateParams,$rootScope, SignatureService) {

        var canvas = document.getElementById('signatureCanvas');
        $scope.signature = SignatureService.signature().getSignatureData();
        if (canvas) {
            var signaturePad = new SignaturePad(canvas);
            function resizeCanvas() {
                var ratio = Math.max(window.devicePixelRatio || 1, 1);
                canvas.width = canvas.offsetWidth * ratio;
                canvas.height = canvas.offsetHeight * ratio;
                canvas.getContext("2d").scale(ratio, ratio);
                signaturePad.clear(); // otherwise isEmpty() might return incorrect value
            }
            window.addEventListener("resize", resizeCanvas);
            resizeCanvas();

            if ($scope.signature.length > 0) {
                signaturePad.fromDataURL($scope.signature[0]);
            }
        }

        $scope.clearCanvas = function () {
            console.log("tessss hahaha");
            signaturePad.clear();
            SignatureService.signature().addSignatureData('');
        }

        $scope.saveCanvas = function () {
            if (signaturePad.isEmpty()) {
                signaturePad.clear();
                SignatureService.signature().addSignatureData('');
                $rootScope.goBack();
                console.log("tessss hahaha");

            } else {
                var sigImg = signaturePad.toDataURL();
                console.log("tessss hahaha" + sigImg);
                SignatureService.signature().addSignatureData(sigImg);
                $rootScope.goBack();
            }
        }


    });