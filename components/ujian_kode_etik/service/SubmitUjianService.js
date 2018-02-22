/**
 * 
 */
angular.module('PruForce.services')

	.service('SubmitUjianService', function (DataFactory, $q) {
		function invoke(npa, amlID, amlExamAnswer) {

			var req = {
				adapter: "adapters/HTTPAdapter/SubmitAMLExam",
                procedure: "SubmitAMLExam",
				method: WLResourceRequest.POST,
				parameters: { "params": "['" + npa + "','" + amlID + "','" + amlExamAnswer + "']" }
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