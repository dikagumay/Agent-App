var pruforce = angular.module('PruForce');

pruforce.controller('SqsCtrl', function($scope, $ionicScrollDelegate, $state, $rootScope, $localStorage, $ionicPopup, $timeout) {

  $scope.menuTabs = [
    {name: "Ilustrasi",  url: "components/newSqs/homepage/ilustrasi.html"},
    {name: "Template",  url: "components/newSqs/homepage/template.html"}
  ]

  $scope.currentMenuTab = $scope.menuTabs[0];
  /*$scope.calcHide = false;*/

  $scope.isActiveTab = function(menuTabUrl){
    return $scope.currentMenuTab.url === menuTabUrl;
  };

  $scope.movingTab = function(e, menuTab){
    e.preventDefault();
    $scope.currentMenuTab = menuTab;

    var self = $(e.toElement);
    var tabContentTitle = self.attr("href");

    $(".tab-scrolling").animate({scrollLeft: self.attr("data-position-left")}, 300);
    self.parent().find("a").removeClass("active");
    self.addClass("active");
    $(tabContentTitle).addClass("active");
    $ionicScrollDelegate.scrollTop();
  };

  $scope.illustrationProgress = [
    {id:1,name: "Pemegang Polis" },
    {id:2,name: "Profile Tertanggung" },
    {id:3,name: "Pilih Produk" },
    {id:4,name: "Manfaat" },
    {id:5,name: "Ilustrasi" }
  ];

  $scope.illustrationOnHoldDatas = [
    {id: 1, name: "Spongebob Square Pants 1", status: "Disetujui dan disingkronkan", quotationNumber:"0A1234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 1, dateCreate:"2016-10-09", amount: 120000000, progress:3},
    {id: 2, name: "Spongebob Square Pants 2", status: "Disetujui dan disingkronkan", quotationNumber:"0A2234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 1, dateCreate:"2016-10-07", amount: 220000000, progress:4},
    {id: 3, name: "Spongebob Square Pants 3", status: "Disetujui dan disingkronkan", quotationNumber:"0A3234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 1, dateCreate:"2016-10-04", amount: 320000000, progress:5},
    {id: 4, name: "Spongebob Square Pants 4", status: "Disetujui dan disingkronkan", quotationNumber:"0A4234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 1, dateCreate:"2016-10-02", amount: 420000000, progress:2},
    {id: 5, name: "Spongebob Square Pants 5", status: "Disetujui dan disingkronkan", quotationNumber:"0A5234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 1, dateCreate:"2016-10-08", amount: 520000000, progress:3},
    {id: 6, name: "Spongebob Square Pants 6", status: "Disetujui dan disingkronkan", quotationNumber:"0A6234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 0, dateCreate:"2016-10-10", amount: 620000000, progress:4},
    {id: 7, name: "Spongebob Square Pants 7", status: "Disetujui dan disingkronkan", quotationNumber:"0A7234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 0, dateCreate:"2016-10-01", amount: 720000000, progress:5},
    {id: 8, name: "Spongebob Square Pants 8", status: "Disetujui dan disingkronkan", quotationNumber:"0A8234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 0, dateCreate:"2016-10-05", amount: 1020000000, progress:1},
    {id: 9, name: "Spongebob Square Pants 9", status: "Disetujui dan disingkronkan", quotationNumber:"0A9234567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 0, dateCreate:"2016-10-03", amount: 920000000, progress:3},
    {id: 10, name: "Spongebob Square Pants 10", status: "Disetujui dan disingkronkan", quotationNumber:"0A1034567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 0, dateCreate:"2016-10-11", amount: 820000000, progress:2},
    {id: 11, name: "Spongebob Square Pants 11", status: "Disetujui dan disingkronkan", quotationNumber:"0A1134567", type: "PRU<em class='font-100'>link assurance account</em>", approved: 0, dateCreate:"2016-10-06", amount: 1120000000, progress:4}
  ]

  $scope.templateDatas = [
    {id:1, name:"Cover Crisis", dateCreate:"2016-10-09", type: "Prulink assurance account"},
    {id:2, name:"Cover Crisis", dateCreate:"2016-10-09", type: "Prulink assurance account"},
    {id:3, name:"Cover Crisis", dateCreate:"2016-10-09", type: "Prulink assurance account"},
    {id:4, name:"Cover Crisis", dateCreate:"2016-10-09", type: "Prulink assurance account"},
    {id:5, name:"Cover Crisis", dateCreate:"2016-10-09", type: "Prulink assurance account"}
  ]

  $scope.tempillustrationOnHoldDatas = $scope.illustrationOnHoldDatas;
  $scope.memberIllustrationOnHoldDatas = loadMemberDatas($scope.tempillustrationOnHoldDatas);
  $scope.temptemplateDatas = $scope.templateDatas;
  $scope.memberTemplateDatas = loadMemberDatas($scope.temptemplateDatas);
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
      if(per.quotationNumber){
        per._lowertype = per.quotationNumber.toLowerCase();
      }
      return per;
    });
  }

  $scope.filterIlustrasiList = function(individuStatus, arrayName){
    if(individuStatus == 2){
      $scope[arrayName] = $scope[arrayName].filter(function(a){return a.progress == 5});
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

  $scope.confirmRemovePopup = function(model){
    var msgPopup = null;
    if(model == "ilustrasi"){
      msgPopup = "Apakah anda ingin menghapus ilustrasi <br> SKDJFHASKJDFKA - Sjsdfjsdf8921731 ?"
    }else if(model == "topup"){
      msgPopup = "Apakah anda ingin menghapus <br> TOP UP 1?"
    }else if(model == "penarikan"){
      msgPopup = "Apakah anda ingin menghapus <br> penarikan 1?"
    }else if(model == "template"){
      msgPopup = "Apakah anda ingin menghapus <br> template 1?"
    }

    var confirmPopup = $ionicPopup.confirm({
      title: "",
      template: msgPopup,
      cssClass: 'pru-white-alert without-header popup-large pru-logo-text button-side-duo',
      scope: $scope,
      buttons: [
      {
        text: 'TIDAK',
        type: 'button-dark-gray',
        onTap: function(e) {
        }
      },
      {
        text: 'YA',
        type: 'button-assertive',
        onTap: function(e) {
          if(e.pointer != undefined){
            $scope.removedPopup(model);
          }
        }
      }
      ]
    });
  }

  $scope.morePopup = function(model){
    var listInPopup = null;
    if(model == "ilustrasi"){
      listInPopup = "<div class='font-red pad-bot-20 b-border-gray' ng-click='lanjutkanIlustrasi()'>Lanjutkan Ilustrasi</div>" +
        "<div class='font-gray marg-top-20 b-border-gray pad-bot-20' ng-click='lihatRincianIlustrasi()'>Lihat Rincian Ilustrasi</div>" +
        "<div class='font-gray marg-top-20 b-border-gray pad-bot-20' ng-click='kirimIlustrasi()'>Kirim Ilustrasi</div>" +
        "<div class='font-gray marg-top-20' ng-click='confirmRemovePopup(\"ilustrasi\")'>Hapus Ilustrasi</div>"
    }else if(model == "template"){
      listInPopup = "<div class='font-red pad-bot-20 b-border-gray' ng-click='lihatRincianTemplate()'>Lihat Rincian Template</div>" +
        "<div class='font-gray marg-top-20 pad-bot-20 b-border-gray' ng-click='lihatRincianTemplate()'>Edit Template</div>" +
        "<div class='font-gray marg-top-20' ng-click='confirmRemovePopup(\"template\")'>Hapus Template</div>"
    }
    var confirmPopup = $ionicPopup.confirm({
      title: "",
      template: listInPopup,
      cssClass: 'pru-white-alert without-header popup-large pru-logo-text button-side-duo',
      scope: $scope,
      buttons: [{
        text: 'Batal',
        type: 'font-gray bg-white pad-bot-0 t-border-gray',
        onTap: function(e) {
        }
      }]
    });
    $scope.lanjutkanIlustrasi = function(){
      window.location = "#/pemegangpolis";
      confirmPopup.close();
    };
    $scope.lihatRincianIlustrasi = function(){
      window.location = "#/salin-ilustrasi";
      confirmPopup.close();
    };
    $scope.kirimIlustrasi = function(){
      window.location = "#/send-email-ilustrasi";
      confirmPopup.close();
    };
    $scope.lihatRincianTemplate= function(){
      window.location = "#/templates/detail-pilih-produk";
      confirmPopup.close();
    };
  }

  $scope.removedPopup = function(model){
    // $scope.removeIlustrasi.close();

    $timeout(function(){
      var alertPopup = $ionicPopup.alert({
        title: "Ilustrasi telah terhapus",
        template: model + " telah terhapus",
        cssClass: 'pru-white-alert without-header popup-large pru-logo-text button-side-duo',
        scope: $scope,
        buttons: [
        {
          text: 'SELESAI',
          type: 'button-assertive',
          onTap: function(e) {
            alertPopup.close();
          }
        }
        ]
      }, 5);
    })
  }

  $scope.pemegangpolis = function () {
    $rootScope.AlertDialog("masuk pemegang polis");
    $state.go("pemegangpolis");
  }
  
  $scope.buattemplate = function () {
    $state.go("buat-template");
  }
  
});