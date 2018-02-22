angular.module('PruForce.services')

.service('ChangePasswordService', function(DataFactory, $q){
	
	function invoke(username,nPassword,cPassword){

		var req = {
				adapter : "adapters/HTTPAdapter/ChangePasspruforceid",
                procedure : "ChangePasspruforceid",
				method : WLResourceRequest.POST,
                parameters : {"params":"['"+username+"','"+nPassword+"','"+cPassword+"']"}
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

