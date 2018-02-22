// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var pruforce = angular.module('PruForce', ['ionic', 'PruForce.routes', 'PruForce.controllers', 'PruForce.services', 'PruForce.factories', 'PruForce.directives', 'ngMaterial', 'ngCroppie', 'vAccordion', 'ngAnimate', 'ngMessages', 'ngStorage', 'angularMoment', 'pdf', 'ui.router']);

pruforce.run(function ($ionicPlatform, $rootScope, $state, $ionicPopup, $stateParams, $ionicHistory) {

  $rootScope.agent = {};
  $rootScope.agent.code;
  $rootScope.candidate = {};
  $rootScope.candidate.npa = "npa";
  $rootScope.inbox = {};
  $rootScope.temp = {};
  $rootScope.goBack = function () {
    console.log("testt");
    $ionicHistory.goBack();
  };
  $rootScope.AlertDialog = function (message) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: message,
      cssClass: 'pru-alert pru-logo-text',
      scope: $rootScope,
      buttons: [
        {
          text: 'OK',
          type: 'button-assertive',
          onTap: function (e) {
          }
        }
      ]
    });
  };

  $rootScope.DialogEvents = function (message, events) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em>",
      template: message,
      cssClass: 'pru-alert pru-logo-text',
      scope: $rootScope,
      buttons: [
        {
          text: 'OK',
          type: 'button-assertive',
          onTap: function (e) {
            $state.go(events);
          }
        }
      ]
    });
  };

  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

pruforce.controller('submitCtrl', function ($scope, $state) {

  $scope.nextPageKandidate = function (url) {
    $state.go(url);
  };

  $scope.appNext = function (url) {
    $state.go(url);
  };

});

angular.module('PruForce.controllers', []);
angular.module('PruForce.services', []);
angular.module('PruForce.factories', []);
angular.module('PruForce.directives', []);

function wlCommonInit() {
  console.log(">> wlCommonInit() ...");
  var serverUrl = WL.App.getServerUrl(function (success) {
    console.log(success);
    console.log(WL);

    var myVar = setInterval(function () {
      if (WL.JSONStore !== undefined) {
        var uname = 'admin';
        var pswd = 'admin123';
        InitJsonStore(uname, pswd);
        clearInterval(myVar);
      }
    }, 1000);

  }, function (fail) {
    console.log(fail);
  });
  WLAuthorizationManager.obtainAccessToken().then(
    function (accessToken) {
      console.log(">> Success - Connected to MobileFirst Server");
    },
    function (error) {
      console.log(">> Failed to connect to MobileFirst Server");
      console.log(error);
    }
  );
};

function clearCollection(collection) {
  try {
    WL.JSONStore.get(collection).clear()
      .then(function () {
        AppsLog.log('success removeCollection data ... ' + collection);
      })
      .fail(function (errorObject) {
        AppsLog.log('failed removeCollection data ... ');
      });
  } catch (e) {
    AppsLog.log('exception add data ... ' + e);
  }
}
pruforce.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="bubbles"></ion-spinner>'
});

