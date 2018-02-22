angular.module('PruForce.services')

	.service('CandidateVerifyingDataService', function (DataFactory, $q) {

		function invoke(npa, name, idno, checksalesforceidflag) {
			console.log("npa :" + npa);
			console.log("name :" + name);
			console.log("idno :" + idno);
			var req = {
				adapter: "adapters/HTTPAdapter/verifyCandidate",
				procedure: "verifyCandidate",
				method: WLResourceRequest.POST,
				parameters: { "params": "['" + npa + "','" + name + "','" + idno + "','" + checksalesforceidflag + "']" }
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

