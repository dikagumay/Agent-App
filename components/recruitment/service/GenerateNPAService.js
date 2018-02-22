angular.module('PruForce.services')

.service('GenerateNPAService', function(DataFactory, $q){
	
	function invoke(Cname, CDOB, CEmail, CIDCardNo, CPhoneNo,
	CRecuiter, CReqCode, CReqOffCode, CLeadName,
	CLeadCode, CLeadOffCode){

		var req = {
				adapter : "adapters/HTTPAdapter/GenerateNPA",
                procedure : "GenerateNPA",
				method : WLResourceRequest.POST,
                parameters : {"params":"['"+Cname+"','"+CDOB+"','"+CEmail+"','"+CIDCardNo+"','"+CPhoneNo+"','"+CRecuiter+"','"+CReqCode+"','"+CReqOffCode+"','"+CLeadCode+"','"+CLeadOffCode+"']"}
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

