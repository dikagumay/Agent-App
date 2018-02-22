angular.module('PruForce.services')

	.service('AMLTrainingService', function (DataFactory, $q) {

		function invoke(curdate) {
			var req = {
				adapter: "adapters/HTTPAdapter/GetAMLTraining",
                procedure: "GetAMLTraining",
				method: WLResourceRequest.POST,
				parameters: { "params": "['" +curdate+ "']" }
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

