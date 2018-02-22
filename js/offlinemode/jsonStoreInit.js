var JsonStoreConfig = {
		'RecExam': {
    'JSONSTORE_NAME': 'RecExam',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
		'DataCandidatePack': {
    'JSONSTORE_NAME': 'CandidatePack',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
		'getFastStartCity': {
    'JSONSTORE_NAME': 'FastStartLocation',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
		'getDataGender': {
    'JSONSTORE_NAME': 'MasterDataGender',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
		'getDataReligion': {
    'JSONSTORE_NAME': 'MasterDataReligion',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
		'getDataProvince': {
    'JSONSTORE_NAME': 'MasterDataProvince',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
  'getUnreadPushNotification': {
    'JSONSTORE_NAME': 'ListNotif',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
  'getDataApplicationPack': {
    'JSONSTORE_NAME': 'AplicationPackData',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
  'collectapplpackstatusdata': {
    'JSONSTORE_NAME': 'CollectPackStatus',
    'SearchFields': { agentId: 'string', npa: 'string' }
		},
    'findPublish' : {
    'JSONSTORE_NAME' : 'findPublishTest',
    'SearchFields' : {agentId:'string'}
    },
    'findOccupation' : {
    'JSONSTORE_NAME' : 'findOccupationTest',
    'SearchFields' : {agentId:'string'}
    }




}

function InitJsonStore(username, password) {
  var options = persistence.getOptions(username, password);

  for (var provider in JsonStoreConfig) {
    var collectionName = JsonStoreConfig[provider].JSONSTORE_NAME;
    var collections = {};

    collections[collectionName] = {
      searchFields: JsonStoreConfig[provider].SearchFields
    };

    CreateJsonStore(collectionName, collections, options);
    // delete
    var collectionNameToken = collectionName.split("VERSION");
    if (collectionNameToken.length > 1) {
      var currentVersion = parseInt(collectionNameToken[1]);
      var collectionStore;
      for (var i = currentVersion - 1; i > 0; i--) {
        collectionStore = WL.JSONStore.get(collectionNameToken[0] + "VERSION" + i);
        if (collectionStore != null) {
          collectionStore.removeCollection().then(function () {
            AppsLog.log("remove old store : " + collectionNameToken[0] + "VERSION" + i);
          }).fail(function (errorObject) {
            AppsLog.log("fail to remove old store, error message : " + errorObject);
          });
        }
      }
      collectionStore = WL.JSONStore.get(collectionNameToken[0]);
      if (collectionStore != null) {
        collectionStore.removeCollection().then(function () {
          AppsLog.log("remove old store : " + collectionNameToken[0]);
        }).fail(function (errorObject) {
          AppsLog.log("fail to remove old store, error message : " + errorObject);
        });
      }
    }
  }
}


function CreateJsonStore(JSONSTORE_NAME, collections, options) {
  console.log(WL.JSONStore);
  WL.JSONStore.init(collections, options).then(function (collections) {
    AppsLog.log("Success to initialize jsonstore " + JSONSTORE_NAME);
  }).fail(function (error) {
    AppsLog.log("Failed to initialize jsonstore " + JSONSTORE_NAME);
  });
}