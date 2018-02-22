var pruforce = angular.module('PruForce');

pruforce.controller('dataCandidateCtrl', function($scope) {

  $scope.user = {
    filled: {
      sex: "man",
      age: "27",
      marital: "married",
      responsible: "second-earner",
      amenability: "1",
      children: "not-have-child",
      education: "university",
      experience: "1",
      working_period: "4",
      job_title: "1",
      transport: "car",
      phone: "yes",
      income: "36",
      desire: "high",
      total_friends: "100",
      biography: "karena hanya diprudential saya bisa berkembang menjadi lebih baik"
    }
  }

  angular.element(document).ready(function() {
    init();
  });
});