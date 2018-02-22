angular.module('PruForce.services')

	.service('LoginService', function (DataFactory, $q) {

		function invoke(username, password, channel) {
			var req = {
				adapter: "adapters/HTTPAdapter/getToken",
                procedure: "getToken",
				method: WLResourceRequest.POST,
				parameters: { "params": "['" + username + "','" + password + "','" + channel + "']" }
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

