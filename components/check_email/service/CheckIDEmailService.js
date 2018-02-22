angular.module('PruForce.services')

	.service('CheckIDEmailService', function (DataFactory, $q) {

		function invokeByAgent(agentCode) {
			console.log("npa :" + agentCode);
			var req = {
				adapter: "adapters/HTTPAdapter/getAgentDetail",
				procedure: "getAgentDetail",
				method: WLResourceRequest.POST,
				parameters: { "params": "['" + agentCode + "']" }
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


		function invokeByCandidate(npa) {
			console.log("npa :" + npa);
			var req = {
				adapter: "adapters/HTTPAdapter/getDataApplicationPack",
				procedure: "getDataApplicationPack",
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
			invokeByAgent: invokeByAgent,
			invokeByCandidate: invokeByCandidate
		}
	});

