var SalesForceRealm = {};
SalesForceRealm.realm = "SalesForceRealm";

var SalesForceRealmChallengeHandler = WL.Client.createChallengeHandler(SalesForceRealm.realm);

SalesForceRealmChallengeHandler.isCustomResponse = function(response) {
	AppsLog.log('SalesForceRealmChallengeHandler.isCustomResponse :'+JSON.stringify(response));
	 if (!response || !response.responseJSON) {
	        return false;
	    }
	    
	    if (response.responseJSON.authStatus) 
	    	return true;
	    else 
	    	return false;
};

SalesForceRealmChallengeHandler.handleChallenge = function(response) {	
	AppsLog.log('SalesForceRealmChallengeHandler.handleChallenge :'+JSON.stringify(response));
	var authStatus = response.responseJSON.authStatus;
	
	if (authStatus == "required"){
		return false;
		
	} else if (authStatus == "complete"){
		try
		{
			SalesForceRealmChallengeHandler.submitSuccess();
		}catch(e){}
		
		return true;
	}
	
};

SalesForceRealmChallengeHandler.submitLoginFormCallback = function(response) {
	
	var isLoginFormResponse = SalesForceRealmChallengeHandler.isCustomResponse(response);
	AppsLog.log('SalesForceRealmChallengeHandler.submitLoginFormCallback :'+JSON.stringify(response));
	if (isLoginFormResponse){
		SalesForceRealmChallengeHandler.submitSuccess();
    } else {
    	SalesForceRealmChallengeHandler.handleChallenge(response);
    }
};