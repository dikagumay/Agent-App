angular.module('PruForce.services')

	.service('VerifyAgentSFAService', function (DataFactory, $q) {

		function invoke(agentcode_sfaId, password) {
			console.log("agentcode :" + agentcode_sfaId);
			console.log("idcardno :" + password);
			var req = {
				adapter: "adapters/HTTPAdapter/loginAgent",
                procedure: "loginAgent",
				method: WLResourceRequest.POST,
                parameters: { "params": "['" + agentcode_sfaId + "','" + password + "']" }
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

