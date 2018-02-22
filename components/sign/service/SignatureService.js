angular.module('PruForce.services')

    .service('SignatureService', function () {
        var signatureData = [""];
        function signature() {
            var addSignatureData = function (newObj) {
                 signatureData.splice(0, 1, newObj);
            }
            var getSignatureData = function () {
                return signatureData;
            }

            return {
                addSignatureData: addSignatureData,
                getSignatureData: getSignatureData
            };
        }
        return {
            signature: signature
        }

    });




