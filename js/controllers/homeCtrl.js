var pruforce = angular.module('PruForce');

pruforce.controller('homeCtrl', function($scope, $ionicPopup) {
  $scope.disclaimerPopup = function(e) {
    var disclaimerPopup = $ionicPopup.show({
      template: "home/template_disclaimer.html",
      cssClass: 'pru-alert pru-logo-text',
      scope: $scope
    });
  };

  angular.element(document).ready(function() {
    
  });
});