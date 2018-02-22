var pruforce = angular.module('PruForce');

pruforce.controller('ilustrasiCtrl', function($scope, $ionicPopup, $mdDialog, $state, $rootScope) {

  $scope.illustrationProgress = [
    {id:1,name: "Pemegang Polis" },
    {id:2,name: "Profile Tertanggung" },
    {id:3,name: "Pilih Produk" },
    {id:4,name: "Manfaat" },
    {id:5,name: "Ilustrasi" }
  ];

  $scope.illustrationDatas = [
    {id: 1, name: "Spongebob Square Pants 1", status: "Disetujui dan disingkronkan", quotationNumber:"0A1234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-09", amount: 120000000},
    {id: 2, name: "Spongebob Square Pants 2", status: "Disetujui dan disingkronkan", quotationNumber:"0A2234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-07", amount: 220000000},
    {id: 3, name: "Spongebob Square Pants 3", status: "Disetujui dan disingkronkan", quotationNumber:"0A3234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-04", amount: 320000000},
    {id: 4, name: "Spongebob Square Pants 4", status: "Disetujui dan disingkronkan", quotationNumber:"0A4234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-02", amount: 420000000},
    {id: 5, name: "Spongebob Square Pants 5", status: "Disetujui dan disingkronkan", quotationNumber:"0A5234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-08", amount: 520000000},
    {id: 6, name: "Spongebob Square Pants 6", status: "Disetujui dan disingkronkan", quotationNumber:"0A6234567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-10", amount: 620000000},
    {id: 7, name: "Spongebob Square Pants 7", status: "Disetujui dan disingkronkan", quotationNumber:"0A7234567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-01", amount: 720000000},
    {id: 8, name: "Spongebob Square Pants 8", status: "Disetujui dan disingkronkan", quotationNumber:"0A8234567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-05", amount: 1020000000},
    {id: 9, name: "Spongebob Square Pants 9", status: "Disetujui dan disingkronkan", quotationNumber:"0A9234567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-03", amount: 920000000},
    {id: 10, name: "Spongebob Square Pants 10", status: "Disetujui dan disingkronkan", quotationNumber:"0A1034567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-11", amount: 820000000},
    {id: 11, name: "Spongebob Square Pants 11", status: "Disetujui dan disingkronkan", quotationNumber:"0A1134567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-06", amount: 1120000000}
  ]

  $scope.illustrationOnHoldDatas = [
    {id: 1, name: "Spongebob Square Pants 1", status: "Disetujui dan disingkronkan", quotationNumber:"0A1234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-09", amount: 120000000, progress:3},
    {id: 2, name: "Spongebob Square Pants 2", status: "Disetujui dan disingkronkan", quotationNumber:"0A2234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-07", amount: 220000000, progress:4},
    {id: 3, name: "Spongebob Square Pants 3", status: "Disetujui dan disingkronkan", quotationNumber:"0A3234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-04", amount: 320000000, progress:1},
    {id: 4, name: "Spongebob Square Pants 4", status: "Disetujui dan disingkronkan", quotationNumber:"0A4234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-02", amount: 420000000, progress:2},
    {id: 5, name: "Spongebob Square Pants 5", status: "Disetujui dan disingkronkan", quotationNumber:"0A5234567", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-08", amount: 520000000, progress:3},
    {id: 6, name: "Spongebob Square Pants 6", status: "Disetujui dan disingkronkan", quotationNumber:"0A6234567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-10", amount: 620000000, progress:4},
    {id: 7, name: "Spongebob Square Pants 7", status: "Disetujui dan disingkronkan", quotationNumber:"0A7234567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-01", amount: 720000000, progress:5},
    {id: 8, name: "Spongebob Square Pants 8", status: "Disetujui dan disingkronkan", quotationNumber:"0A8234567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-05", amount: 1020000000, progress:1},
    {id: 9, name: "Spongebob Square Pants 9", status: "Disetujui dan disingkronkan", quotationNumber:"0A9234567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-03", amount: 920000000, progress:3},
    {id: 10, name: "Spongebob Square Pants 10", status: "Disetujui dan disingkronkan", quotationNumber:"0A1034567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-11", amount: 820000000, progress:2},
    {id: 11, name: "Spongebob Square Pants 11", status: "Disetujui dan disingkronkan", quotationNumber:"0A1134567", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-06", amount: 1120000000, progress:4}
  ]

  $scope.tempillustrationDatas = $scope.illustrationDatas;
  $scope.memberIllustrationDatas = loadMemberDatas($scope.tempillustrationDatas);
  $scope.tempillustrationOnHoldDatas = $scope.illustrationOnHoldDatas;
  $scope.memberIllustrationOnHoldDatas = loadMemberDatas($scope.tempillustrationOnHoldDatas);
  $scope.readonly = false;
  $scope.querySearch = querySearch;
  $scope.selectedCode = [];
  $scope.numberChips = [];
  $scope.numberChips2 = [];
  $scope.numberBuffer = '';
  $scope.chipSearch = chipSearch;

  /**
   * Remove chips function.
   */
  $scope.removeChips = function (arrayName){
    if ($scope.selectedCode.length > 1){
      $scope[arrayName] = $scope.selectedCode;
    }else{
      $scope[arrayName] = $scope['temp'+arrayName];
    }
  } 
  /**
   * Search for memberDatas.
   */
  function querySearch (query, array) {
    var results = query ? array.filter(createFilterFor(query)) : [];
    return results;
  }
  
  function chipSearch(item, arrayName) {
    if ($scope.selectedCode.length>0){
      $scope[arrayName] = $scope.selectedCode;
    }
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(member) {
      return (member._lowername.indexOf(lowercaseQuery) === 0) || (member._lowertype.indexOf(lowercaseQuery) === 0); 
    };
  }

  function loadMemberDatas(array) {
    var datas =  array;
    return datas.map(function (per) {
      per._lowername = per.name.toLowerCase();
      per._lowertype = per.quotationNumber.toLowerCase();
      return per;
    });
  }

  $scope.filterIlustrasiList = function(individuStatus, arrayName){
    if(individuStatus == 1){
      $scope[arrayName] = $scope[arrayName].filter(function(a){return a.approved == 1});
    }else{
      if($scope.selectedCode.length>0){
        $scope[arrayName] = $scope.selectedCode;
      }else{
        $scope[arrayName] = $scope['temp'+arrayName];
      }
    }
  }

  $scope.sortingIlustrasiList = function (orderBy, arrayName){
    if (orderBy == 1){
      $scope[arrayName] = $scope[arrayName].sort(function(a, b) {
         return new Date(a.dateCreate).getTime() - new Date(b.dateCreate).getTime() 
      });
    }else{
      $scope[arrayName] = $scope['temp'+arrayName].sort(function(a, b) {
        return a.id - b.id;
      });
    }
  }

  var canvasAgen = document.getElementById('signatureCanvasAgen');
  if (canvasAgen){
    var signaturePadAgen = new SignaturePad(canvasAgen);
    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvasAgen.width = canvasAgen.offsetWidth * ratio;
        canvasAgen.height = canvasAgen.offsetHeight * ratio;
        canvasAgen.getContext("2d").scale(ratio, ratio);
        signaturePadAgen.clear(); // otherwise isEmpty() might return incorrect value
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  }

  $scope.clearCanvasAgen = function() {
    signaturePadAgen.clear();
  }

  $scope.saveCanvasAgen = function() {
    if (signaturePadAgen.isEmpty()){
        signaturePadAgen.clear();
    }else{
      var sigImg = signaturePadAgen.toDataURL();
    }    
  }

  var canvasKlien = document.getElementById('signatureCanvasKlien');
  if (canvasKlien){
    var signaturePadKlien = new SignaturePad(canvasKlien);
    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvasKlien.width = canvasKlien.offsetWidth * ratio;
        canvasKlien.height = canvasKlien.offsetHeight * ratio;
        canvasKlien.getContext("2d").scale(ratio, ratio);
        signaturePadKlien.clear(); // otherwise isEmpty() might return incorrect value
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  }

  $scope.clearCanvasKlien = function() {
    signaturePadKlien.clear();
  }

  $scope.saveCanvasKlien = function() {
    if (signaturePadKlien.isEmpty()){
        signaturePadKlien.clear();
    }else{
      var sigImg = signaturePadAgen.toDataURL();
    }    
  }

  $scope.btnDownload = function(e) { 
    var myPopup = $ionicPopup.show({ 
      title: "", 
      template: `<h5 class="font-dark text-capitalize">Ilustrasi berhasil terdownload</h5>`, 
      cssClass: 'pru-alert white-header font-dark button-side-duo', 
      scope: $scope, 
      buttons: [
      {
        text: 'lihat ilustrasi',
        type: 'button-dark-gray',
        onTap: function(e) {
        }
      },
      {
        text: 'kirim email',
        type: 'button-assertive',
        onTap: function(e) {
          $scope.addListPopup();
        }
      }
      ]
    }); 
  };

  JsBarcode("#code39", "Hello", {format: "code39"});

  /*$scope.chart = {
      labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets : [
          {
              fillColor : "rgba(151,187,205,0)",
              strokeColor : "#e67e22",
              pointColor : "rgba(151,187,205,0)",
              pointStrokeColor : "#e67e22",
              data : [4, 3, 5, 4, 6]
          },
          {
              fillColor : "rgba(151,187,205,0)",
              strokeColor : "#f1c40f",
              pointColor : "rgba(151,187,205,0)",
              pointStrokeColor : "#f1c40f",
              data : [8, 3, 2, 5, 4]
          }
      ], 
  };*/

  $scope.salinIlustrasi = function() {
    $state.go("salin-ilustrasi");
  }

  $scope.output = function() {
    $state.go("output");
  }

  $scope.sendEmail = function() {
    $state.go("send-email-ilustrasi");
  }

  $scope.statusIlustrasi = function() {
    $rootScope.AlertDialog("search page");
    $state.go("status-ilustrasi");
  }
  
  $scope.ilustrasiTertunda = function () {
    /*$rootScope.AlertDialog("search page");*/
    $state.go("daftar-ilustrasi-tertunda");
  }
});