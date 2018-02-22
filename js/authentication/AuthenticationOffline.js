var AuthenticationOffline = {};

AuthenticationOffline.login = function(username, password) {
	if(username != null && password != null )
	{
		Authentication.success();
	}
	else
	{
		Authentication.failed();
	}
	
};

AuthenticationOffline.checkSession = function() {
	try {
		WL.JSONStore.get(COLLECTION_SESSION).findAll()
		
		.then(function (res) {
			if (res.length != 0){
				//ApssLog.log("Response session offline");
				//ApssLog.log(JSON.stringify(res));
			}else{
						
			}
		})
		.fail(function (errorObject) {
			//ApssLog.log('not success find all session ...' + errorObject);
		});							
	}
	catch (e) {
		//ApssLog.log('failed ... ' + e);
	}
	
};
