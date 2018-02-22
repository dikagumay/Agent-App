var persistence = {};

persistence.options = {};

persistence.store = {};

persistence.getOptions = function(uid, pid)
{
	var options ={};
	options.username = uid;
	options['pass'+'word'] = pid;
	
	return options;
	
}

persistence.store.add = function(collection, data)
{
	try {
		WL.JSONStore.get(collection).add(data)	
		.then(function () {
//			ApssLog.log('success add data ... ');
		})
		.fail(function (errorObject) {
//			ApssLog.log('failed add data ... ');
		});
	} catch (e) {
//		ApssLog.log('exception add data ... ' + e);
	}			
}

persistence.store.clear = function(collection)
{
	try {
		WL.JSONStore.get(collection).clear()
		.then(function () {
//			ApssLog.log('success removeCollection data ... ');
		})
		.fail(function (errorObject) {
//			ApssLog.log('failed removeCollection data ... ');
		});
	} catch (e) {
//		ApssLog.log('exception add data ... ' + e);
	}			
}


/**
 * jsonStoreObject : json store obj that contains _id and json atribute
 * 
 */
persistence.unionJson = function(jsonStoreObjectList)
{
	var alljson = {};
	var jsonStoreObject = null;
	for(var i=0;i<jsonStoreObjectList.length;i++)
	{
		jsonStoreObject = jsonStoreObjectList[i];
		for(key in jsonStoreObject.json)
		{
			
			if(jsonStoreObject.json[key] != null && jsonStoreObject.json[key] !=="" && jsonStoreObject.json[key] !="")
			{
				alljson[key] = jsonStoreObject.json[key];
			}
			else if(!alljson[key] )
			{
				alljson[key] = null;
			}
		}

	}
	
	var res = new Array();
	res[0] = {};
	res[0].json = alljson;
	
	//alert('gabung : ' + JSON.stringify(res[0].json));
	return res;
}
