/**
 * 
 */

angular.module('app.services')
.service('AgentProfileService', function(DataFactory, $q){
	console.log("masuk service");
	function invoke(agentNumber, pruforceId){
		console.log("masuk service 2");
	    var req = {
	            adapter : "HTTPAdapterSIT",
	            procedure : "findProfileByAgentNumber",
	            //headers: headers
	            parameters : [agentNumber, pruforceId]
	        };
		
	    var deferred = $q.defer();
		
		DataFactory.invoke(req)
	    .then(function (res) {
        	deferred.resolve(res);
        	console.log("hasil invoke dalam service");
        	console.log(res);
	    }, function(error){
	    	deferred.reject(error);
	    });
		
		return deferred.promise;
	}
	
	return {
		invoke: invoke
	}
});

