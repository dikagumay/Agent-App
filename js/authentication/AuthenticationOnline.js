var AuthenticationOnline = {};

AuthenticationOnline.submitLoginFormCallback = function(response) {
    
	var isLoginFormResponse = SalesForceRealmChallengeHandler.isCustomResponse(response);
    if (isLoginFormResponse){
    	var result = SalesForceRealmChallengeHandler.handleChallenge(response);
    	if(result)
		{
			Authentication.success();
		}
    	else
		{
    		Authentication.failed();
		}
    }
    else
	{
    	Authentication.failed();
	}
};

AuthenticationOnline.login = function(username, password) {
	
	var reqURL = '/my_custom_auth_request_url';
    var options = {};
    options.parameters = {
        username :username,
        password : password
    };
    options.headers = {};
    SalesForceRealmChallengeHandler.submitLoginForm(reqURL, options, AuthenticationOnline.submitLoginFormCallback);	
   
};

AuthenticationOnline.checkSession = function() {
//	clearData(COLLECTION_SESSION);
	try {
		ApssLog.log(COLLECTION_SESSION);
		WL.JSONStore.get(COLLECTION_SESSION).findAll()
		
		.then(function (res) {
//			alert(JSON.stringify(res));
			if (res.length > 1){
//				for (var i = 0; i < res.length; i++){
//					if (res[0].json.username != username){
//						alert(JSON.stringify(res[0]));
//						persistence.store.clear(COLLECTION_SESSION);
//					}
//				}
//				alert('Hapus session');
				clearData(COLLECTION_SESSION);
			}else{
//				ApssLog.log("Response session online");
//				ApssLog.log(JSON.stringify(res));
//				alert(JSON.stringify(res));
					if (res[0].json.username == username){
//						alert('akan cek timeout');
						var userSession = res[0];
						var lastLogin = userSession.json.date;
//						ApssLog.log('lastLogin');
//						ApssLog.log(lastLogin);
//						alert(lastLogin);
						if (isTimeOut(lastLogin)) {
//							alert('TIMEOUT');
							$("#MainContent").load(path + "pages/main.html");
						}
					} else {
//						alert('Clear Session');
						clearData(COLLECTION_SESSION);
					}
//				}
//				persistence.store.clear(COLLECTION_SESSION);
//				alert(JSON.stringify(res));
//				ApssLog.log(JSON.stringify(res));
			}
		})
		.fail(function (errorObject) {
//			ApssLog.log('not success find all session ...' + errorObject);
		});							
	}
	catch (e) {
//		ApssLog.log('failed ... ' + e);
	}		
};

function isTimeOut(date){
	var date1 = new Date();
	var dateNow = date1.addDays(-1);
	var dateComparator = Date.prototype.addMinutes(dateNow, 5);
//	ApssLog.log('Comparation date');
//	ApssLog.log(date);
	var date2 = new Date(date); 
//	ApssLog.log(date2)
//	ApssLog.log(dateComparator);
	if (date2 > dateComparator) {
//		ApssLog.log('Comparing');
//		ApssLog.log(true);
		return true;
	} else {
//		ApssLog.log('Comparing');
//		ApssLog.log(false);
		return false;
	}
}

function clearData(collection){
	try {
		WL.JSONStore.get(collection).clear()
		.then(function () {
//			ApssLog.log('success removeCollection data ... '+collection);
		})
		.fail(function (errorObject) {
//			ApssLog.log('failed removeCollection data ... '+collection);
		});
	} catch (e) {
//		ApssLog.log('exception add data ... ' + e);
	}
}