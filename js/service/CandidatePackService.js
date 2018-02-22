angular.module('PruForce.services')

.service('CandidatePackService', function($q, $filter, DataFactory){
	
	var collection = JsonStoreConfig.DataCandidatePack;
	
	function getDataCandidatePack(candidateParam){
		var networkState = navigator.connection.type;
		
		var promise;
		
		if (networkState == Connection.NONE)
		{
			promise = getDataCandidatePackFromJsonStore(candidateParam);
		} else {
			promise = getDataCandidatePackFromServer(candidateParam);
		}
		
		console.log(promise)
		
		return promise;
	};
	
	function getDataCandidatePackFromJsonStore(candidateParam){
		var deferred = $q.defer();
		
		try{
			var query = candidateParam;
			var options = {exact: false
				    	   //limit: 100 //returns a maximum of 10 documents
				    	  };
			
			WL.JSONStore.get(collection.JSONSTORE_NAME).find(query, options).then(function(res){
				try{
					if(res.length > 0){
						deferred.resolve(res[0]);
					} else {
						deferred.resolve("empty");
					}		
				} catch(error){
					console.log("failed to retrieve jsonstore " + collection.JSONSTORE_NAME);
					deferred.reject(error);
				}						
			}).fail(function(error){
				console.log("failed to retrieve jsonstore " + collection.JSONSTORE_NAME);
				deferred.reject(error);
			});
		} catch (error) {
			console.log("failed to retrieve jsonstore " + collection.JSONSTORE_NAME + error);
			deferred.reject(error);
		}
		
		return deferred.promise;
	}
	
	function getDataCandidatePackFromServer(candidateParam){
		/*var deferred = $q.defer();
		
		deferred.reject("error");
		
		return deferred.promise;*/
		
		var promise = getDataCandidatePackFromJsonStore(candidateParam);
		
		return promise;
	}
	
	function saveDataCandidate(dataParam){
		var deferred = $q.defer();
		
		var data = dataParam;
		
		var dataCandidateParam = {
				  agentId: data.agentId,
				  npa: data.npa
			  }
		
		
		getDataCandidatePackFromJsonStore(dataCandidateParam).then(
			function(result){
				if(result === 'empty'){
					WL.JSONStore.get(collection.JSONSTORE_NAME).add(data).then(function () {
						console.log("Success adding data to jsonstore " + collection.JSONSTORE_NAME);
						deferred.resolve(result);
					}).fail(function (error) {
						console.log("Failed adding data to jsonstore " + collection.JSONSTORE_NAME);
						deferred.reject(error);
					});
				} else {
					result.json = data;
					var options = {};
					WL.JSONStore.get(collection.JSONSTORE_NAME).replace(result, options).then(function (numberOfDocsReplaced) {
						deferred.resolve("Success modify " + numberOfDocsReplaced + " documents");
					}).fail(function (error) {
						deferred.reject(error);
					});
				}
			},
			function(error){
				deferred.reject(error);
			}
		);
		
		return deferred.promise;
	}
	
	var getFastStartType = function(){
		  var deferred = $q.defer();
		
		  var fastStartType = [
      	  {
      	    value:1,
      	    label:"PRUSales academy (PSA)"
      	  },
      	  {
						value:2,
						label:"Guest Lecture"
					}
        ]
		  
	  deferred.resolve(fastStartType);
				
	  return deferred.promise;
	}
	
	var getFastStartLocation = function(){
	  var deferred = $q.defer();

		var req = {
			adapter : "adapters/AobAdapter/getFastStartCity",
			method : WLResourceRequest.GET,
			procedure : "getFastStartCity",
			parameters : []

		};
		
		var deferred = $q.defer();
		
		DataFactory.invoke(req,false)
	    .then(function (res) {					
					var fastStartLocation  = [];

					console.log("Test faststart location");
					console.log(res);

					res.invocationResult.forEach(function(element) {
						var city = {};
						city.value = element.faststartlocation;
						city.label = element.faststartlocation;

						fastStartLocation.push(city);
					}, this);
					
					
						
					deferred.resolve(fastStartLocation);

	    }, function(error){
	    	deferred.reject(error);
	    });

	  
				
	  return deferred.promise;
	}
	
	var getfastStartSchedule = function(){
		  var deferred = $q.defer();
		
		  var fastStartSchedule = [
        	  {
        	    id:1,
        	    part:"Siang",
        	    icon:"ion-android-sunny",
        	    date:"14-16",
        	    days:"2",
        	    month:'September 2016',
        	    time:"09:00 - 17:00",
        	    loc:'PRUdential Center'
        	  },
        	  {
        	    id:2,
        	    part:"Malam",
        	    icon:"ion-ios-moon-outline",
        	    date:"14-16",
        	    days:"2",
        	    month:'September 2016',
        	    time:"17:00 - 22:00",
        	    loc:'PRUdential Center'
        	  },
        	  {
        	    id:3,
        	    part:"Siang",
        	    icon:"ion-android-sunny",
        	    date:"15-17",
        	    days:"3",
        	    month:'September 2016',
        	    time:"09:00 - 17:00",
        	    loc:'PRUdential Center'
        	  }
          ]
		  
	  deferred.resolve(fastStartSchedule);
				
	  return deferred.promise;
	}
	
	var getTestLocation = function(){
	  var deferred = $q.defer();


	
	  var testLocation = [
		  {
		    value:1,
		    label:"Jakarta"
		  },
		  {
		    value:2,
		    label:"Bandung"
		  },
		  {
				value:3,
				label:"Bogor"
			},
			{
				value:4,
				label:"Semarang"
			},
      ]
		  
	  deferred.resolve(testLocation);
				
	  return deferred.promise;
	}

	var getTestSchedule = function(){
		  var deferred = $q.defer();
		
		  var testSchedule = [
			  {
			    date: "Rabu, 18 September 2016",
			    sch : [{id:1, number:"01", time:"09:00 - 10:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"},
			    {id:2, number:"02", time:"13:00 - 14:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"}]
			  },
			  {
			    date: "kamis, 19 September 2016",
			    sch : [{id:3, number:"01", time:"09:00 - 10:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"},
			    {id:4, number:"02", time:"13:00 - 14:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"}]
			  },
			  {
			    date: "Jumat, 20 September 2016",
			    sch : [{id:5, number:"01", time:"09:00 - 10:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"},
			    {id:6, number:"02", time:"13:00 - 14:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"}]
			  }
  		];
		  
		  
	  	deferred.resolve(testSchedule);
				
	  	return deferred.promise;
	}

	return {
		getDataCandidatePack: getDataCandidatePack,
		saveDataCandidate: saveDataCandidate,
		getfastStartSchedule: getfastStartSchedule,
		getFastStartType: getFastStartType,
		getFastStartLocation: getFastStartLocation,
		getTestLocation: getTestLocation,
		getTestSchedule: getTestSchedule
	}
});