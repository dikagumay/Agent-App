angular.module('PruForce.services')

.service('MasterDataService', function($q, $filter, DataFactory){

    var getDataGender = function(){
	  var deferred = $q.defer();

		var req = {
			adapter : "adapters/AobAdapter/getDataGender",
			method : WLResourceRequest.GET,
			procedure : "getDataGender",
			parameters : []

		};
		
		var deferred = $q.defer();
		
		DataFactory.invoke(req,false)
	    .then(function (res) {					
            var masterDataGender  = [];

            res.invocationResult.forEach(function(element) {
                var dataGender = {};
                console.log(element);
                dataGender.value = element.aobitem;
                dataGender.label = element.aoblongdescription;

                masterDataGender.push(dataGender);
            }, this);
        
            
                
            deferred.resolve(masterDataGender);

	    }, function(error){
	    	deferred.reject(error);
	    });

	  
				
	  return deferred.promise;
	}

    var getDataReligion = function(){
	  var deferred = $q.defer();

		var req = {
			adapter : "adapters/AobAdapter/getDataReligion",
			method : WLResourceRequest.GET,
			procedure : "getDataReligion",
			parameters : []

		};
		
		var deferred = $q.defer();
		
		DataFactory.invoke(req,false)
	    .then(function (res) {					
            var masterDataReligion  = [];

            res.invocationResult.forEach(function(element) {
                var dataReligion = {};
                dataReligion.value = element.aobitem;
                dataReligion.label = element.aoblongdescription;

                masterDataReligion.push(dataReligion);
            }, this);
            
            
                
            deferred.resolve(masterDataReligion);

	    }, function(error){
	    	deferred.reject(error);
	    });

	  
				
	  return deferred.promise;
	}

    var getDataProvince = function(){
	  var deferred = $q.defer();

		var req = {
			adapter : "adapters/AobAdapter/getDataProvince",
			method : WLResourceRequest.GET,
			procedure : "getDataProvince",
			parameters : []

		};
		
		var deferred = $q.defer();
		
		DataFactory.invoke(req,false)
	    .then(function (res) {			
            var masterDataProvince  = [];

            res.invocationResult.forEach(function(element) {
                var dataProvince = {};
                dataProvince.value = element.aobItem;
                dataProvince.label = element.aobLongDescription;

                masterDataProvince.push(dataProvince);
            }, this);
            
            
                
            deferred.resolve(masterDataProvince);

	    }, function(error){
	    	deferred.reject(error);
	    });

	  
				
	  return deferred.promise;
	}

    return {
		getDataGender: getDataGender,
        getDataReligion: getDataReligion,
        getDataProvince: getDataProvince
		
	}
});