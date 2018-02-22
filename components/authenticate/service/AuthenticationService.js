/**
 * 
 */
angular.module('PruForce.services')
	.service('AuthenticationServiceA',
		function($scope, $state, DataFactory, $localStorage,$q) {
			function sendToken() {
				var token = $localStorage.token;
				var req = {
					adapter : "HTTPAdapterSecurity",
					procedure : "tesToken",
					parameters : [ token ]
				};
				WL.Client.invokeProcedure(req);
			}
			
			return {
				sendToken: sendToken
			}

		});