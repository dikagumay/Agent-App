angular.module('PruForce.services')

    .service('InboxService', function (CandidateFactory, $q) {

        function invoke(agentCode) {
            console.log("ag code"+agentCode);
            var req = {
                adapter: "adapters/HTTPAdapter/getUnreadPushNotification",
                procedure: "getUnreadPushNotification",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + agentCode + "']" }
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

