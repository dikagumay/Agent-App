/**
 * 
 */
angular.module('PruForce.controllers')
	.controller('InboxCtrl', function ($scope, $rootScope, $state, $filter, GetListInbox) {

		var date = new Date();
		var timeHours = date.getHours();
		var timeMinute = date.getMinutes();
		var timeAll = timeHours + ":" + timeMinute;
		var listInboxAll = [];
		getListInboxSuccess(GetListInbox);

		function getListInboxSuccess(res) {

			for (var i = 0; i < res.invocationResult.length; i++) {
				var data = {};
				data.opened = res.invocationResult[i].opened;
				data.id = res.invocationResult[i].id;
				data.userid = res.invocationResult[i].userid;
				data.notif = res.invocationResult[i].alert;
				// this is used for replace \ from service respon
				var listPayLoad = (res.invocationResult[i].payload).replace("\\", "");
				var listNotif = JSON.parse(listPayLoad);
				data.category = listNotif.docList;
				data.reqId = listNotif.reqId;
				data.npa = listNotif.npa;
				data.status = "NEW";
				data.icon = iconInbox(listNotif.reqId);
				data.time = timeAll;
				listInboxAll[i] = data;
			}
			$scope.dataNotifications = listInboxAll;

		}

		function iconInbox(reqId) {
			var icon;
			switch (reqId) {
				case "sign":
					icon = "ion-clipboard";
					break;
				case "doc":
					icon = "ion-clipboard";
					break;
				case "changemanager":
					icon = "ion-clipboard";
					break;
				case "changerecruiter":
					icon = "ion-clipboard";
					break;
				case "fs":
					icon = "ion-clipboard";
					break;
				case "aaji":
					icon = "ion-clipboard";
					break;
				case "ag_done":
					icon = "ion-clipboard";
					break;
				case "info":
					icon = "ion-clipboard";
					break;
				case "doc_ag":
					icon = "ion-clipboard";
					break;
			}

			return icon;

		}
		$scope.DetailNotif = function (Id, npa) {
			var reqId = $filter('lowercase')(Id);
			switch (reqId) {
				case "sign":
					DetailSign(npa);
					break;
				case "doc":
					DetailDoc();
					break;
				case "changemanager":
					DetailChangeManager();
					break;
				case "changerecruiter":
					DetailChangeRecruiter();
					break;
				case "fs":
					DetailFS();
					break;
				case "aaji":
					DetailAAJI();
					break;
				case "ag_done":
					DetailAg_Done();
					break;
				case "info":
					DetailInfo();
					break;
				case "doc_ag":
					DetailDoc_Ag();
					break;
			}
		}

		function DetailSign(npa) {
			$rootScope.candidate.npa = npa;
			$state.go("detail-notification-sign", { 'npa': npa });
		}
		function DetailDoc() {
			$state.go("lembar-persetujuan-tanda-tangan");
		}
		function DetailChangeManager() {
			$state.go("lembar-persetujuan-tanda-tangan");
		}
		function DetailChangeRecruiter() {
			$state.go("lembar-persetujuan-tanda-tangan");
		}
		function DetailFS() {
			$state.go("lembar-persetujuan-tanda-tangan");
		}
		function DetailAAJI() {
			$state.go("lembar-persetujuan-tanda-tangan");
		}
		function DetailAg_Done() {
			$state.go("lembar-persetujuan-tanda-tangan");
		}
		function DetailInfo() {
			$state.go("lembar-persetujuan-tanda-tangan");
		}
		function DetailDoc_Ag() {
			$state.go("lembar-persetujuan-tanda-tangan");
		}


		angular.element(document).ready(function () {
		});
	});