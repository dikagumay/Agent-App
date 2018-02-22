persistence.SalesForce = {};
persistence.SalesForce.COLLECTION = 'SalesForce';

persistence.SalesForce.data = {};


// ADAPTER BEGIN


// ADAPTER END


// store BEGIN
persistence.SalesForce.store = {};
persistence.SalesForce.store.init = function()
{
	var collections = {};
	
	collections[persistence.SalesForce.COLLECTION] = {
	
		searchFields : {salesforceId: 'string', npaNumber : 'string', agentNumber: 'string'}
	
	};
	
	WL.JSONStore.init(collections, persistence.options)
	
	.then(function () {
		
		WL.JSONStore.get(persistence.SalesForce.COLLECTION).findAll()
		.then(function (arrayResults) {
			persistence.SalesForce.data = {};
			for(var i in arrayResults)
			{
				persistence.SalesForce.data[i] = arrayResults[i].json;
			}
		})
		.fail(function (errorObject) {
				AppsLog.log("not success SalesForce offline ..."+errorObject);
		});
		
		AppsLog.log("success init data SalesForce ...");
	})
	
	.fail(function (errorObject) {
		AppsLog.log("not success init data SalesForce ...");
	});	
}

