var pruforce = angular.module('PruForce');

pruforce.controller('NewSQSCtrl', function($scope, $ionicScrollDelegate) {
  function init() {
    setTimeout(function(){
      // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      //   $('.selectpicker').selectpicker('mobile');
      // }else{
        $('.selectpicker').selectpicker();
      // }
        
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