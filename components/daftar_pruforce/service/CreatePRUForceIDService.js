angular.module('PruForce.services')

    .service('CreatePRUForceIDService', function (DataFactory, $q) {

        function invoke(username, password, npa, agentCode) {
            console.log("username :" + username);
            console.log("password :" + password);
            console.log("userCode_or_flagType :" + npa);
            console.log("flagType_or_userCode :" + agentCode);
            var req = {
                adapter: "adapters/HTTPAdapter/createpruforceid",
                procedure: "createpruforceid",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + username + "','" + password + "','" + npa + "','" + agentCode + "']" }
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

