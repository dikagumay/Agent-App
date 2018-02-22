angular.module('PruForce.services')

    .service('GetCandidatePackService', function (CandidateFactory, $q) {

        function invoke(npa) {
            console.log("npanya :"+npa);
            var req = {
                adapter: "adapters/HTTPAdapter/getDataApplicationPack",
                procedure: "getDataApplicationPack",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + npa + "']" }
            };

            var deferred = $q.defer();

            CandidateFactory.invoke(req, false)
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

