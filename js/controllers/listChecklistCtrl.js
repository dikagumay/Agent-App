var pruforce = angular.module('PruForce');

pruforce.controller("listChecklistCtrl", function($scope){

    $scope.syaratDanKetentuan1 = {checked:false};
    $scope.syaratDanKetentuan2 = {checked:false};
    $scope.syaratDanKetentuan3 = {checked:false};

    $scope.syaratDanKetentuanChecked1 = {checked:true};
    $scope.syaratDanKetentuanChecked2 = {checked:true};
    $scope.syaratDanKetentuanChecked3 = {checked:true};

    $scope.notifNoteChecked1 = true;
    $scope.notifNoteChecked2 = true;
    $scope.notifNoteChecked3 = true;

    $scope.hideNotif1 = function(e, model){
        $scope.notifNote1 = model.checked;
        $scope.notifNoteChecked1 = model.checked;
    }
    $scope.hideNotif2 = function(e, model){
        $scope.notifNote2 = model.checked;
        $scope.notifNoteChecked2 = model.checked;
    }
    $scope.hideNotif3 = function(e, model){
        $scope.notifNote3 = model.checked;
        $scope.notifNoteChecked3 = model.checked;
    }
});


