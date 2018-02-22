angular.module('PruForce.factories')
	.factory('DataFactory', function ($q, $interval, $rootScope) {

		var DataProvider = function ($q) {
			var deferred = $q.defer();

			var result = [];
			var collection = [];

			var ONE_MINUTE = 60 * 1000;

			var APIEvent = {
				timeout: ONE_MINUTE,
				onSuccess: onApiSuccess,
				onFailure: onApiFailure
			};
			var APIEventOnline = {
				timeout: ONE_MINUTE,
				onSuccess: onApiSuccessOnline,
				onFailure: onApiFailureOnline
			};

			this.GetData = GetData;

			var procedureName;

			function GetData(request, flagonline) {
				collection = JsonStoreConfig[request.procedure];
				procedureName = request.procedure;

				var networkState = navigator.connection.type;

				AppsLog.log("Checking internet connection");
				console.log(networkState);
				if (networkState == Connection.NONE) {
					if (flagonline) {
						GetDataFromWebAPI(request, flagonline);
					} else {
						GetDataFromJsonStore(request, flagonline);
					}
				} else {
					if (flagonline) {
						GetDataFromWebAPI(request, flagonline);
					} else {
						GetDataFromWebAPI(request, flagonline);
						GetDataFromJsonStore(request, flagonline);
					}
				}

				return deferred.promise;
			}

			function GetDataFromWebAPI(request, flagonline) {

				var resourceRequest = new WLResourceRequest(
					request.adapter,
					request.method
				);
				resourceRequest.sendFormParameters(request.parameters).then(
					onApiSuccessOnline,
					onApiFailureOnline
				)
			}

			function GetDataFromJsonStore(request, flagonline) {
				AppsLog.log("Retrieve data from json store " + collection.JSONSTORE_NAME);
				try {

					var query = { agentId: $rootScope.agent.code };
					var options = {
						exact: false
						//limit: 100 //returns a maximum of 10 documents
					};

					WL.JSONStore.get(collection.JSONSTORE_NAME).find(query, options).then(function (res) {
						try {
							if (res.length > 0) {
								AppsLog.log("Get json data " + collection.JSONSTORE_NAME);
								AppsLog.log(collection.JSONSTORE_NAME);
								AppsLog.log(JSON.stringify(res));
								result = res[0].json;
								deferred.resolve(result);
							} else {
								GetDataFromWebAPI(request, flagonline);
							}
						} catch (error) {
							AppsLog.log("failed to retrieve jsonstore " + collection.JSONSTORE_NAME);
							deferred.reject(error);
						}
					}).fail(function (error) {
						AppsLog.log("failed to retrieve jsonstore " + collection.JSONSTORE_NAME);
						deferred.reject(error);
					});
				} catch (error) {
					AppsLog.log("failed to retrieve jsonstore " + collection.JSONSTORE_NAME + error);
					deferred.reject(error);
				}
			}

			function getCollection(res) {
				var result;
				console.log(procedureName);
				console.log(res);
				switch (procedureName) {
					case "getDataProvince":
						result = res.responseJSON.result.TI028;
						break;
					default:
						result = res.responseJSON.array;
				}

				return result;
			};

			function onApiSuccess(res) {
				//result.invocationResult = res.responseJSON.array;
				result.retrieveDate = new Date();
				result.agentId = $rootScope.agent.code;
				AppsLog.log("nama json :" + collection.JSONSTORE_NAME)
				clearCollection(collection.JSONSTORE_NAME);

				var opt = {};

				var data = {};
				data.invocationResult = getCollection(res);//res.responseJSON.array;
				data.agentId = result.agentId;
				data.retrieveDate = result.retrieveDate;

				AppsLog.log(data);
				WL.JSONStore.get(collection.JSONSTORE_NAME).add(data).then(function () {
					AppsLog.log("Success adding data to jsonstore " + collection.JSONSTORE_NAME);
					deferred.resolve(data);
				}).fail(function (error) {
					AppsLog.log("Failed adding data to jsonstore " + collection.JSONSTORE_NAME);
					deferred.resolve(result);
				});
			}


			function onApiFailure(error) {
				AppsLog.log("Error connect to web api");
				AppsLog.log(error);
				GetDataFromJsonStore();
			}

			function onApiSuccessOnline(res) {
				AppsLog.log("onApiSuccessOnline" + JSON.stringify(res));
				result.invocationResult = res.responseJSON;
				result.retrieveDate = new Date();
				deferred.resolve(result);
			}

			function onApiFailureOnline(error) {
				console.log("Error connect to web api");
			}
		}

		function invoke(request, flagonline) {
			var provider = new DataProvider($q);
			//AppsLog.log(provider);
			return provider.GetData(request, flagonline);
		}


		return {
			invoke: invoke
		}
	});
