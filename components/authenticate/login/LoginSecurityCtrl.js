/**
 * 
 */
angular.module('PruForce.controllers').controller('LoginSecurityCtrl',
		function($scope, $state, $controller, $q, DataFactory, $localStorage) {
			console.log("LoginSecurityController");
			$scope.loginInput = {
				"username" : "",
				"password" : ""
			}

			function sendToken(tokenParams) {
				var req = {
					adapter : "HTTPAdapterSecurity",
					procedure : "tesToken",
					parameters : [ tokenParams ]
				};
				WL.Client.invokeProcedure(req);
			}
			$scope.login = login;

			function login() {
				console.log("LoginSecurityController-login");

				var req = {
					adapter : "HTTPAdapterSecurity",
					procedure : "login",
					parameters : [ $scope.loginInput ]
				};

				var deferred = $q.defer();

				DataFactory.invoke(req, true).then(function(res) {
					if (res.invocationResult.statusCode == 200) {
						console.log("Success login");
						console.log("Status code: " + res.invocationResult.statusCode);
						$localStorage.token = res.invocationResult.access_token;
						sendToken(res.invocationResult.access_token);
						$state.go('test123');
						deferred.resolve(res);
					} else {
						console.log("Failed login");
						console.log("Status code: " + res.invocationResult.statusCode);
						WL.SimpleDialog.show("PRUforce","Pruforce id atau password salah", 
			    				[{
			    					text : 'OK',
			    					handler : WL.Client.close()}]
			    		);
						deferred.reject(res);
					}
				}, function(error) {
					console.log("Failed login");
					deferred.reject(error);
				});
				
			}
		});