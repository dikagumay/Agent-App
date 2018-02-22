var pruforce = angular.module('PruForce');

pruforce.controller('baseCtrl', function($scope, $ionicScrollDelegate) {
  function init() {
    setTimeout(function(){
      // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      //   $('.selectpicker').selectpicker('mobile');
      // }else{
        $('.selectpicker').selectpicker();
      // }
      var formMaterial = $('form.material');

      for (var i = 0; i < formMaterial.length; i++) {
        if(!$($('form.material')[i]).hasClass("materialized")){
          $($('form.material')[i]).materialForm();
        }
      }

    }, 100);
  }

  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop(true);
  };
  $scope.userHubungan ={name:'Angel del Angel'};
  angular.element(document).ready(function() {
    init();
  });
});