angular.module('PruForce.services')

    .service('SMSVerificationService', function (DataFactory, $q) {

        function invokeByAgent(agentCode, smstoken) {

            var req = {
                adapter: "adapters/HTTPAdapter/verifyTokenAgent",
                procedure: "verifyTokenAgent",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + agentCode + "','" + smstoken + "']" }
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

        function invokeByCandidate(npa, smstoken) {

            var req = {
                adapter: "adapters/HTTPAdapter/verifyToken",
                procedure: "verifyToken",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + npa + "','" + smstoken + "']" }
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

