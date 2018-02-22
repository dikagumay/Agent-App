angular.module('PruForce.services')

	.service('SecurityQuestionService', function (DataFactory, $q) {

		function invoke() {
			
			var req = {
				adapter: "adapters/HTTPAdapter/getSecQuest",
                procedure: "getSecQuest",
				method: WLResourceRequest.POST,
                parameters: []
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

