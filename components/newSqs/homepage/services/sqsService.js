angular.module('PruForce.services')

	.service('sqsService', function (DataFactory, $q, $rootScope) {

		function invoke(version) {

			var req = {
				adapter: "adapters/HTTPAdapterNewSQS/findPublish",
                procedure: "findPublish",
				method: WLResourceRequest.POST,
                parameters: { "params": "['" + version + "']" }
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

