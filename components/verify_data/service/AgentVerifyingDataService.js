angular.module('PruForce.services')

	.service('AgentVerifyingDataService', function (DataFactory, $q) {

		function invoke(agentCode, idcardno, dob, phonenumber) {
			console.log("agentCode :" + agentCode);
			console.log("idcardno :" + idcardno);
			console.log("dob :" + dob);
			console.log("phonenumber :" + phonenumber);
			var req = {
				adapter: "adapters/HTTPAdapter/VerifyAgent",
				procedure: "VerifyAgent",
				method: WLResourceRequest.POST,
				parameters: { "params": "['" + agentCode + "','" + idcardno + "','" + dob + "','" + phonenumber + "']" }
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

