angular.module('PruForce.services')

	.service('NewPasswordService', function (DataFactory, $q, $rootScope) {

		function invoke(pruforceId, password) {
			var req = {
				adapter: "adapters/HTTPAdapter/forpasspruforceid",
                procedure: "forpasspruforceid",
				method: WLResourceRequest.POST,
                parameters: { "params": "['" + pruforceId + "','" + password + "']" }
			};

			var deferred = $q.defer();

			DataFactory.invoke(req, true)
				.then(function (res) {
					deferred.resolve(res);
				}, function (error) {
					deferred.reject(error);
				});

			return deferred.promise;
		}

		return {
			invoke: invoke
		}
	});










