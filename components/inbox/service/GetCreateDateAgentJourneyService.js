angular.module('PruForce.services')

    .service('GetCreateDateAgentJourneyService', function (CandidateFactory, $q) {

        function invoke(npa) {
            console.log("npanya :"+npa);
            var req = {
                adapter: "adapters/HTTPAdapter/getDateAgentJourney",
                procedure: "getDateAgentJourney",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + npa + "']" }
            };

            var deferred = $q.defer();

            CandidateFactory.invoke(req, true)
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

