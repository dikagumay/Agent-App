angular.module('PruForce.services')

    .service('CheckEmailExistService', function (DataFactory, $q) {

        function invoke(email, phoneno) {
            console.log("email :" + email);
            console.log("phoneno :" + phoneno);

            var req = {
                adapter: "adapters/HTTPAdapter/getEmailExist",
                procedure: "getEmailExist",
                method: WLResourceRequest.POST,
                parameters: { "params": "['" + email + "','" + phoneno + "']" }
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

