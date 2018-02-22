angular.module('PruForce.services')

.service('DaftarRekrutmentService', function(DataFactory, $q){
	
	function invoke(agentCode){

		var req = {
				adapter : "adapters/HTTPAdapter/getListCandidate",
                procedure : "getListCandidate",
				method : WLResourceRequest.POST,
                parameters : {"params":"['"+agentCode+"']"}
		};
		
		var deferred = $q.defer();
		
		DataFactory.invoke(req,true)
	    .then(function (res) {
        	deferred.resolve(res);
	    }, function(error){
	    	deferred.reject(error);
	    });
		
		return deferred.promise;
	}
	
	return {
		invoke: invoke
	}
});

