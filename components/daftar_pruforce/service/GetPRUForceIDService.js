



angular.module('PruForce.services')

	.service('GetPRUForceIDService', function (DataFactory, $q) {

		function invoke(agentCode, npaNumber) {
			console.log("agentcode :" + agentCode);
			console.log("idcardno :" + npaNumber);
			var req = {
				adapter: "adapters/HTTPAdapter/getIDpruforceid",
                procedure: "getIDpruforceid",
				method: WLResourceRequest.POST,
                parameters: { "params": "['" + agentCode + "','" + npaNumber + "']" }
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