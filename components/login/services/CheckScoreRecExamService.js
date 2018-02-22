angular.module('PruForce.services')

	.service('DetailProfileService', function (DataFactory, $q, $rootScope) {

		function invoke(npa) {
			var req = {
				adapter: "adapters/HTTPAdapter/getScoreRecruitmentResult",
                procedure: "getScoreRecruitmentResult",
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



