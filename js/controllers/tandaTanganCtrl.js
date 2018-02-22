var pruforce = angular.module('PruForce');

pruforce.controller('tandaTanganCtrl', function ($scope, $ionicPopup) {
    // var canvas = document.getElementById('signatureCanvas');
    // $scope.signature = SignatureService.getSignatureData();
    // if (canvas) {
    //     var signaturePad = new SignaturePad(canvas);
    //     function resizeCanvas() {
    //         var ratio = Math.max(window.devicePixelRatio || 1, 1);
    //         canvas.width = canvas.offsetWidth * ratio;
    //         canvas.height = canvas.offsetHeight * ratio;
    //         canvas.getContext("2d").scale(ratio, ratio);
    //         signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    //     }
    //     window.addEventListener("resize", resizeCanvas);
    //     resizeCanvas();

    //     // if ($scope.signature.length > 0) {
    //         signaturePad.fromDataURL($scope.signature[0]);
    //     // }
    // }

    // // var canvasPerekrut = document.getElementById('signatureCanvasPerekrut');
    // // if (canvasPerekrut){
    // //     var signaturePadPerekrut = new SignaturePad(canvasPerekrut);
    // //     function resizeCanvas() {
    // //         var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    // //         canvasPerekrut.width = canvasPerekrut.offsetWidth * ratio;
    // //         canvasPerekrut.height = canvasPerekrut.offsetHeight * ratio;
    // //         canvasPerekrut.getContext("2d").scale(ratio, ratio);
    // //         signaturePadPerekrut.clear(); // otherwise isEmpty() might return incorrect value
    // //     }
    // //     window.addEventListener("resize", resizeCanvas);
    // //     resizeCanvas();

    // //     if ($scope.signature.length>1){
    // //         signaturePadPerekrut.fromDataURL($scope.signature[1]);
    // //     }
    // // }

    // // var canvasManajer = document.getElementById('signatureCanvasManajer');
    // // if (canvasManajer){
    // //     var signaturePadManajer = new SignaturePad(canvasManajer);
    // //     function resizeCanvas() {
    // //         var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    // //         canvasManajer.width = canvasManajer.offsetWidth * ratio;
    // //         canvasManajer.height = canvasManajer.offsetHeight * ratio;
    // //         canvasManajer.getContext("2d").scale(ratio, ratio);
    // //         signaturePadManajer.clear(); // otherwise isEmpty() might return incorrect value
    // //     }
    // //     window.addEventListener("resize", resizeCanvas);
    // //     resizeCanvas();

    // //     if ($scope.signature.length>3){
    // //         signaturePadManajer.fromDataURL($scope.signature[1]);
    // //     }
    // // }

    // $scope.clearCanvas = function () {
    //     console.log("tessss hahaha");
    //     signaturePad.clear();
    //     SignatureService.addSignatureData('');
    // }
    // // $scope.clearCanvasPerekrut = function () {
    // //     signaturePadPerekrut.clear();
    // //     SignatureService.addSignatureDataPerekrut('');
    // // }
    // // $scope.clearCanvasManajer = function () {
    // //     signaturePadManajer.clear();
    // //     SignatureService.addSignatureDataManajer('');
    // // }

    // $scope.saveCanvas = function () {
    //     if (signaturePad.isEmpty()) {
    //         signaturePad.clear();
    //         SignatureService.addSignatureData('');
    //         window.location = "#/lembar-persetujuan-tanda-tangan";
    //         console.log("tessss hahaha");

    //     } else {
    //         var sigImg = signaturePad.toDataURL();
            
    //         console.log("tessss hahaha" + sigImg);
    //         SignatureService.addSignatureData(sigImg);
    //         window.location = "#/lembar-persetujuan-tanda-tangan";
    //     }
    // }

    // $scope.saveCanvasPerekrut = function () {
    //     if (signaturePadPerekrut.isEmpty()) {
    //         signaturePadPerekrut.clear();
    //         SignatureService.addSignatureDataPerekrut('');
    //         window.location = "#/lembar-persetujuan-tanda-tangan";
    //         console.log("tessss hahaha" + sigImg);

    //     } else {
    //         console.log("tessss hahaha" + sigImg);
    //         var sigImg = signaturePadPerekrut.toDataURL();
    //         SignatureService.addSignatureDataPerekrut(sigImg);
    //         window.location = "#/lembar-persetujuan-tanda-tangan";
    //     }
    // }

    // $scope.saveCanvasManajer = function () {
    //     if (signaturePadManajer.isEmpty()) {
    //         signaturePadManajer.clear();
    //         SignatureService.addSignatureDataManajer('');
    //         window.location = "#/lembar-persetujuan-tanda-tangan";
    //     } else {
    //         console.log("tessss hahaha" + sigImg);
    //         var sigImg = signaturePadManajer.toDataURL();
    //         SignatureService.addSignatureDataManajer(sigImg);
    //         window.location = "#/lembar-persetujuan-tanda-tangan";
    //     }
    // }

});

// pruforce.service("SignatureService", function () {
//     var signatureData =[""];

//     var addSignatureData = function (newObj) {
//         signatureData.splice(0, 1, newObj);
//     }

//     // var addSignatureDataPerekrut = function (newObj) {
//     //     signatureData.splice(1, 1, newObj);
//     // }

//     // var addSignatureDataManajer = function (newObj) {
//     //     signatureData.splice(2, 1, newObj);
//     // }

//     var getSignatureData = function () {
//         return signatureData;
//     }

//     return {
//         addSignatureData: addSignatureData,
//         getSignatureData: getSignatureData
//         ,
//         // addSignatureDataPerekrut: addSignatureDataPerekrut,
//         // addSignatureDataManajer: addSignatureDataManajer
//     };
// });