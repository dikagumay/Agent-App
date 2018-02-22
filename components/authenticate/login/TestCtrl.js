/**
 * 
 */
angular.module('PruForce.controllers').controller('TestCtrl',
		function($scope, $state, $controller, $q, DataFactory, $localStorage) {
			console.log("TestCtrl");
			
			$scope.user = {
					"username":"",
					"roles":[]
			};
			
			var req = {
				adapter : "HTTPAdapterSecurity",
				procedure : "validate",
				parameters : []
			};

			var deferred = $q.defer();

			DataFactory.invoke(req, true).then(function(res) {
				if (res.invocationResult.statusCode == 200) {
					console.log("VALIDATE");
					$scope.user.username = res.invocationResult.username;
					$scope.user.roles = res.invocationResult.roles;
					deferred.resolve(res);
				} else {
					console.log("Failed validate");
					console.log("Status code: " + res.invocationResult.statusCode);
					deferred.reject(res);
				}
			}, function(error) {
				console.log("Failed validate");
				deferred.reject(error);
			});
			AppsLog.log("Test");

		});