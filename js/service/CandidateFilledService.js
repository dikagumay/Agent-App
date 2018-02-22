angular.module('PruForce.services')

.service('CandidateFilledService', function(DataFactory, $q){
	
	function invoke(){

		var req = {
				adapter : "HTTPAdapter",
                procedure : "RecExam",
                parameters : []

		};
		
		var deferred = $q.defer();
		
		DataFactory.invoke(req,false)
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

