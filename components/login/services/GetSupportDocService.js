angular.module('PruForce.services')

	.service('GetSupportDocService', function (DataFactory, $q, $rootScope) {

		function invoke(npa) {
			var req = {
				adapter: "adapters/HTTPAdapter/GetSuppDoc",
                procedure: "GetSuppDoc",
				method: WLResourceRequest.POST,
                parameters: { "params": "['" + npa + "']" }
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



