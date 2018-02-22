angular.module('PruForce.services')

    .service('VerifySecurityQuestionService', function (DataFactory, $q) {

        function invoke(sq1no, sq1ans, sq2no, sq2ans, pruforceId) {

            var req = {
                adapter: "adapters/HTTPAdapter/verifyInputSQ",
                procedure: "verifyInputSQ",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + sq1no + "','" + sq1ans + "','" + sq2no + "','" + sq2ans + "','" + pruforceId + "']" }
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

