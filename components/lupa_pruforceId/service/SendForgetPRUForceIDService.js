angular.module('PruForce.services')

    .service('SendForgetPRUForceIDService', function (DataFactory, $q) {

        function invoke(agentcode, npa, email) {

            var req = {
                adapter: "adapters/HTTPAdapter/forIDpruforceid",
                procedure: "forIDpruforceid",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + agentcode + "','" + npa + "','" + email + "']" }
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

