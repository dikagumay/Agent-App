

function InitInboxMessage(username, pwd){

	var options = persistence.getOptions(username, pwd);

	var collections = {};

	collections[COLLECTION_INBOX] = {

		searchFields : {username : 'string', id : 'string'},

	};

	WL.JSONStore.init(collections, options)

	.then(function () {
		
		AppsLog.log("success init data Inbox ...");		
		
	})

	.fail(function (errorObject) {
		AppsLog.log("not success init data message ...");
	});				
}


//------------------------ Add Message to Inbox -------------------------//
function addInbox(param){
	console.log("START >> addInbox " + new Date());
	//alert('masuk sini add data');
	//alert('message nya' + param);
var data = {};
//data.username = username;
data = param;

	try {
	
		WL.JSONStore.get(COLLECTION_INBOX).add(data)
	
		.then(function () {
			// ----------------- //
			//g_inbox = data;
			
			try {
				WL.JSONStore.get(COLLECTION_INBOX).findAll()
				
				.then(function (result) {
					buildInbox(result);
					g_inbox = result;
					
					//alert('messagenya dari adapter : ' + JSON.stringify(g_inbox));
				})

				.fail(function (errorObject) {
					AppsLog.log('error inbox from adapter ...' + errorObject);
				});	
				
			}
			catch (e) {
				AppsLog.log('failed ... ' + e);
			}

			
		})
	
		.fail(function (errorObject) {
			// ----------------- //
		});
					
	
	} catch (e) {
		AppsLog.log('failed add data message ... ' + e);
	}
	console.log("END >> addInbox " + new Date());
}
 //------------ end of Add Message to Inbox ------------------------//


// remove inbox

function removeInbox(id){
	var query = {_id: id};
	 
	var options = {exact: true};
	 
	WL.JSONStore.get(COLLECTION_INBOX).remove(query, options)
	
	.then(function (numberOfDocsRemoved) {
		//alert('message delete success');
		//alert('data nya ' + numberOfDocsRemoved);
		AppsLog.log('message delete success');
		
		try {
			WL.JSONStore.get(COLLECTION_INBOX).findAll()
			
			.then(function (result) {
				//alert('hasilnya' + result);
				g_inbox = result;
				
				//alert('messagenya dari adapter : ' + JSON.stringify(g_inbox));
			})

			.fail(function (errorObject) {
				AppsLog.log('error delete inbox...' + errorObject);
			});	
			
		}
		
		catch (e) {
			AppsLog.log('failed ... ' + e);
		}
	  // handle success
	})
	
	.fail(function (error) {
	  // handle failure
	});
}

// cek before remove inbox

function flagInbox(id){
	var options = {};
	var query = {id: id};
	try {
		WL.JSONStore.get(COLLECTION_INBOX).find(query,options)
		
		.then(function (res) {
			var _id = res[0]._id;
			
			try {

				UpdateInbox(id);
				removeInbox(_id);										

			} catch (e) {
				AppsLog.log('ada exception : ' + e);
			}			
			
		})

		.fail(function (errorObject) {
			AppsLog.log('not success reload data candidate...' + errorObject);
		});					
	}
	catch (e) {
		AppsLog.log('failed ... ' + e);
	}		
}


// cek jumlah message

function CheckInbox(){
	try {
		WL.JSONStore.get(COLLECTION_INBOX).findAll().then(function (result) {

				if (result.length > 0){
					$("#Message").removeClass("hide");
					$("#Message").html(result.length);
					$("#messaging").removeClass("hide");
					$("#messaging").html(result.length);
					$("#jmlmsg").removeClass("hide");
					$("#jmlmsg").html(result.length);
					buildInbox(result);
					g_inbox = result;
				}
		})
		
		.fail(function (error) {
		  // handle failure
		});
	} catch (e) {
		AppsLog.log('failed ... ' + e);
	}
	
}