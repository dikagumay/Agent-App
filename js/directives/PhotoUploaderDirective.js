var pruforce = angular.module('PruForce.directives');


pruforce.directive("landscapePhotoUploader", ['PhotoUploaderService', function (PhotoUploaderService) {
  return {
    restrict: 'A',
    scope: false,
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        var uploadTo = element.attr('ng-model');
        
        PhotoUploaderService.GetFromLibrary().then(
			function(result){
				scope.openLandscapeModal(result, uploadTo);
			},
			function(error){
				console.log(error);
			}
		);
        
        
      });
    }
  }
}]);

pruforce.directive("takeLandscapePhoto", ['PhotoUploaderService', function (PhotoUploaderService) {
  return {
    restrict: 'A',
    scope: false,
    link: function (scope, element, attributes) {
      element.bind("click", function (changeEvent) {
        var uploadTo = element.attr('ng-model');
        
        PhotoUploaderService.TakePictureFromCamera().then(
			function(result){
				scope.openLandscapeModal(result, uploadTo);
			},
			function(error){
				console.log(error);
			}
		);
        
        
      });
    }
  }
}]);

pruforce.directive("potraitPhotoUploader", ['PhotoUploaderService', function (PhotoUploaderService) {
  return {
    restrict: 'A',
    scope: false,
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        var uploadTo = element.attr('ng-model');
        
        PhotoUploaderService.GetFromLibrary().then(
			function(result){
				scope.openPotraitModal(result, uploadTo);
			},
			function(error){
				console.log(error);
			}
		);
        
      });
    }
  }
}]);

pruforce.directive("takePotraitPhoto", ['PhotoUploaderService', function (PhotoUploaderService) {
  return {
    restrict: 'A',
    scope: false,
    link: function (scope, element, attributes) {
      element.bind("click", function (changeEvent) {
        var uploadTo = element.attr('ng-model');
        
        PhotoUploaderService.TakePictureFromCamera().then(
			function(result){
				scope.openPotraitModal(result, uploadTo);
			},
			function(error){
				console.log(error);
			}
		);
        
        
      });
    }
  }
}]);
