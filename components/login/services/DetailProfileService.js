angular.module('PruForce.services')

	.service('DetailProfileService', function (DataFactory, $q, $rootScope) {

		function invoke(token) {

			var req = {
				adapter: "adapters/HTTPAdapter/getDetailProfile",
                procedure: "getDetailProfile",
				method: WLResourceRequest.POST,
                parameters: { "params": "['" + token + "']" }
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

