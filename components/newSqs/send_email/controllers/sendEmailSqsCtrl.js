var pruforce = angular.module('PruForce');

pruforce.controller('sendEmailSqsCtrl', function($scope) {
  $scope.mailAttachments = [];
  $scope.attachFile = function(){
    document.getElementById('fileUpload').click();
  }

  $scope.addFileUpload = function(){
    var fileUrl = $('#fileUpload').val();
    var extn = angular.lowercase(fileUrl.split(".").pop());
    var fileName = fileUrl.split("\\").pop();
    $scope.mailAttachments.push({fileUrl : fileUrl, extn : extn, fileName : fileName});
    $scope.$apply();
  }
});