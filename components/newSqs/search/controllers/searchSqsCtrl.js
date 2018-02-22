var pruforce = angular.module('PruForce');

pruforce.controller('searchSqsCtrl', function($scope) {
  $scope.searchTabs = [{
    title: 'Illustrasi',
    url: 'illustrasi'
  }, {
    title: 'Template',
    url: 'template'
  }, {
    title: 'Email',
    url: 'email'
  }

  ];

  $scope.currentSearchTab = 'illustrasi';

  $scope.onClickTab = function (searchTab) {
    $scope.currentSearchTab = searchTab.url;
  }

  $scope.isActiveTab = function(searchTabUrl) {
    return searchTabUrl == $scope.currentSearchTab;
  }
});