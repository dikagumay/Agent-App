var pruforce = angular.module('PruForce');

pruforce.controller('lampiranPerjanjianCtrl', function($scope, $ionicScrollDelegate) {
  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop(true);
  };
});