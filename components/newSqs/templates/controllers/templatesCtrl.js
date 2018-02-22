var pruforce = angular.module('PruForce');

pruforce.controller('templatesCtrl', function($scope, $ionicScrollDelegate, $document, $ionicPopup, $mdDialog, $element) {
  
  $scope.menuTabs = [
    {name: "Pilih Produk",  url: "components/newSqs/templates/pilih-produk.html"},
    {name: "Manfaat",  url: "components/newSqs/templates/template-manfaat.html"}
  ]

  $scope.currentMenuTab = $scope.menuTabs[0];

  $scope.isActiveTab = function(menuTabUrl){
    return $scope.currentMenuTab.url === menuTabUrl;
  };

  $scope.menuDetailTemplate = [
    {name: "Pilih Produk", url: "components/newSqs/templates/template-detail-pilih-produk.html"},
    {name: "manfaat", url: "components/newSqs/templates/detail-manfaat.html"}
  ]

  $scope.currentMenuDetailTemplate = $scope.menuDetailTemplate[0];
  $scope.calcHide = false;

  $scope.isActiveMenuDetailTemplate = function(menuTabUrl){
    return $scope.currentMenuDetailTemplate.url === menuTabUrl;
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


  $scope.templateLists = [
    {id: 1, name: "Cover Crisis 1", status: "Kirim via email", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-09"},
    {id: 2, name: "Cover Crisis 2", status: "Kirim via email", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-07"},
    {id: 3, name: "Cover Crisis 3", status: "Kirim via email", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-04"},
    {id: 4, name: "Cover Crisis 4", status: "Kirim via email", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-02"},
    {id: 5, name: "Cover Crisis 5", status: "Kirim via email", type: "Prulink assurance account", approved: 1, dateCreate:"2016-10-08"},
    {id: 6, name: "Cover Crisis 6", status: "Kirim via email", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-10"},
    {id: 7, name: "Cover Crisis 7", status: "Kirim via email", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-01"},
    {id: 8, name: "Cover Crisis 8", status: "Kirim via email", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-05"},
    {id: 9, name: "Cover Crisis 9", status: "Kirim via email", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-03"},
    {id: 10, name: "Cover Crisis 10", status: "Kirim via email", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-11"},
    {id: 11, name: "Cover Crisis 11", status: "Kirim via email", type: "Prulink assurance account", approved: 0, dateCreate:"2016-10-06"}
  ]

  $scope.tempilTemplateDatas = $scope.templateLists;
  $scope.memberTemplateDatas = loadMemberDatas($scope.tempilTemplateDatas);

  $scope.pilihProduk = {
    nospaj: "0A1234567",
    jenisProduk: "PRUlink",
    name :"PRUlink assurance acount (RUP)",
    pilihProduk :"Bulanan",
    pembayaranFrekuensi : "Bulanan"
  }

  $scope.createManfaat = {
    moneyMin : "Rp 0.00",
    moneyMax  : "Rp 0.00",
    premiUnapplied: "Rp 0.00",
    premiTahunan: "Rp 0.00",
    tahunPolisSejak: "0",
    tahunPolisSampai: "0",
    jumlah: "Rp 0.00"
  }

  $scope.premi = {
    besarPremiTahunan : "Rp 100.000.000.00",
    rencanaPembayaran : "10",
    alternatifPembayaran :"99",
    asumsiNilai1 : "45",
    asumsiNilai2 : "55",
    asumsiNilai3 : "65"
  }

  $scope.saveTemplate = function(e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em> SQS",
      template: "<input type='text' class='input-gray' placeholder='Nama Template'/>",
      cssClass: 'pru-alert pru-logo-text button-side-duo',
      scope: $scope,
      buttons: [
      {
        text: 'Batal',
        type: 'button-dark-gray',
        onTap: function(e) {
        }
      },
      {
        text: 'Simpan',
        type: 'button-assertive',
        onTap: function(e) {
          $scope.savedTemplate();
        }
      }
      ]
    });
  };

  $scope.savedTemplate = function() {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em> SQS",
      template: "<div class='pad-top-30 pad-bot-30'><small>Template <strong>Crisis Cover</strong> berhasil disimpan</small></div>",
      cssClass: 'pru-alert pru-logo-text button-side-duo',
      scope: $scope,
      buttons: [
      {
        text: 'Buat Baru',
        type: 'button-dark-gray',
        onTap: function(e) {
        }
      },
      {
        text: 'Lihat Daftar',
        type: 'button-assertive',
        onTap: function(e) {
          window.location = window.location.origin + "/#/newSqs/templates/daftar-templates"
        }
      }
      ]
    });
  };

  function loadMemberDatas(array) {
    var datas =  array;
    return datas.map(function (per) {
      per._lowername = per.name.toLowerCase();
      return per;
    });
  }


  var popupAlokasiDanaTemp = [
    {id:1, category: "Moderat", label:"PRUlink Rupiah Managed Fund", model:"alokasiDanaFilled1", checked:false , data:{val1: ""}}, 
    {id:2, category: "Moderat", label:"PRUlink Rupiah Fixed Income Fund", model:"alokasiDanaFilled2", checked:false  , data:{val1: "" }}, 
    {id:3, category: "Moderat", label:"PRUlink Rupiah Equity Fund", model:"alokasiDanaFilled3", checked:false  , data:{val1: "" }}, 
    {id:4, category:"Moderat", label:"PRUlink Rupiah Cash Fund", model:"alokasiDanaFille4", checked:false  , data:{val1: "" }}, 
    {id:5, category: "Moderat", label:"PRUlink Rupiah Managed Fund Plus", model:"alokasiDanaFilled5", checked:false  , data:{val1: "" }}, 
    {id:6, category: "Agresif", label:"PRUlink Rupiah Indonesia Greater China Equity Fund", model:"alokasiDanaFilled6", checked:false, data:{val1: ""}},
    {id:7, category: "Agresif", label:"PRUlink Rupiah Equity Fund Plus", model:"alokasiDanaFilled7", checked:false, data:{val1: ""}},
    {id:8, category: "Agresif", label:"PRUlink Rupiah Infrastructure & Consumer Equity Fund", model:"alokasiDanaFilled8", checked:false, data:{val1: ""}},
    {id:9, category: "Agresif", label:"PRUlink Rupiah Asia Pasifik Equity Fund", model:"alokasiDanaFilled9", checked:false, data:{val1: "" }},
    {id:10, category:"Agresif", label:"PRUlink Rupiah Value Discovery Equity Fund", model:"alokasiDanaFilled10", checked:false, data:{val1: "" }} ,
    {id:11, category: "konservatif", label:"PRUlink Rupiah Cash", model:"alokasiDanaFilled11", checked:false, data:{val1: "" }},
    {id:12, category: "konservatif", label:"PRUlink Syariah Rupiah Cash & Bond Fund", model:"alokasiDanaFilled12", checked:false, data:{val1: "" }},
    {id:13, category: "Moderat", label:"PRUlink US Dollar Fixed Income Fund", model:"alokasiDanaFilled13", checked:false, data:{val1: "" }},
    {id:14, category: "Moderat", label:"PRUlink Syariah Rupiah Managed Fund", model:"alokasiDanaFilled14", checked:false, data:{val1: "" }},
    {id:15, category: "Agresif", label:"PRUlink US Dollar Indonesia Greater China Equity Fund", model:"alokasiDanaFilled15", checked:false, data:{val1: "" }},
    {id:16, category: "Agresif", label:"PRUlink Syariah Rupiah Equity Fund", model:"alokasiDanaFilled16", checked:false, data:{val1: "" }},
    {id:17, category: "Agresif", label:"PRUlink Syariah Rupiah Infrastructure & Consumer Equity Fund", model:"alokasiDanaFilled17", checked:false, data:{val1: "" }},
    {id:18, category: "konservatif", label:"PRUlink Syariah Rupiah  Asia Pasifik Equity Fund", model:"alokasiDanaFilled18", checked:false, data:{val1: "" }}
  ]

  $scope.popupAlokasiDanaTemp = popupAlokasiDanaTemp;

  var popupAlokasiDanaTemps =[];

  $scope.popupAlokasiDanaTemps = popupAlokasiDanaTemps;

  var tempPopUpAlokasidanatemps = [];

  var tempAlokasiLength = popupAlokasiDanaTemps.length;

  if (tempAlokasiLength > 0) {
    for (var i = 0; i < tempAlokasiLength; i++) {
      tempPopUpAlokasidanatemps.push(popupAlokasiDanaTemps[i]);
    }
  }

  $scope.addSavebtn = function () {
    var arrlength = tempPopUpAlokasidanatemps.length;
    popupAlokasiDanaTemps.splice(0,popupAlokasiDanaTemps.length);

    if (arrlength > 0) {
      if (arrlength > 1) {
        for (var d = 0; d < arrlength; d++) {
          popupAlokasiDanaTemps.push(tempPopUpAlokasidanatemps[d]);
        }
      } else {
        popupAlokasiDanaTemps.push(tempPopUpAlokasidanatemps[0]);
      }
      var btnLength = tempPopUpAlokasidanatemps.length;
      for (var a=0; a < btnLength;a++) {
        var index = popupAlokasiDanaTemp.indexOf(tempPopUpAlokasidanatemps[a]);

        if (index > -1) {
          popupAlokasiDanaTemp[index]['checked'] = true;
        }else{
          popupAlokasiDanaTemps[index]['checked'] = false;
        }
      }
    }
  };

  $scope.addRemoveBtn = function (obj,model) {
   if (model == true) {
    tempPopUpAlokasidanatemps.push(obj);
   }else{
    var index = tempPopUpAlokasidanatemps.indexOf(obj);
    if (index > -1) {
      tempPopUpAlokasidanatemps.splice(index,1);
    }
   }
  }

  $scope.btnAlokasiDanaTemp  = function(e) {
    var myPopup = $ionicPopup.show({
      title: "Pilih investasi yang ingin ditambahkan",
      template: `
                <h5 class="text-center text-capitalize">Pilih investasi yang ingin ditambahkan</h5>
                <md-input-container class="md-block no-error text-left text-capitalize marg-0">
                  <label class="font-red">ketik disini untuk mencari</label>
                  <input ng-model="jejaringSosial.twitter" class="b-border-gray" type="text">
                </md-input-container>
                <h5 class="text-left">
                  <strong>nama investasi</strong>
                </h5>
                <div layout="column">
                  <div class="text-capitalize text-left">
                    <label><strong class="text-capitalize">Konservatif</strong></label>
                  </div>
                  <div ng-repeat="item in popupAlokasiDanaTemp | filter:{category:'konservatif'}" layout='row' class="marg-top-5 text-left text-capitalize">
                    <div flex class="pad-left-20">
                      <label class="label-middle pad-right-5" ng-model="item.model">{{item.label}} </label>
                    </div>
                    <div flex="10" class="pad-top-5">
                      <md-checkbox md-no-ink aria-label="Checkbox No Ink" ng-model="item.checked" ng-change="addRemoveBtn(item, item.checked)" md-colors="red">
                      </md-checkbox>
                    </div>
                  </div>
                </div>
                <div layout="column">
                  <div class="text-capitalize text-left">
                    <label><strong class="text-capitalize">Moderat</strong></label>
                  </div>
                  <div ng-repeat="item in popupAlokasiDanaTemp | filter:{category:'Moderat'}" layout='row' class="marg-top-5 text-left text-capitalize">
                    <div flex class="pad-left-20">
                      <label class="label-middle pad-right-5" ng-model="item.model">{{item.label}} </label>
                    </div>
                    <div flex="10" class="pad-top-5">
                      <md-checkbox md-no-ink aria-label="Checkbox No Ink" ng-model="item.checked" ng-change="addRemoveBtn(item, item.checked)" md-colors="red">
                      </md-checkbox>
                    </div>
                  </div>
                </div>
                <div layout="column">
                  <div class="text-capitalize text-left">
                    <label><strong class="text-capitalize">Agresif</strong></label>
                  </div>
                  <div ng-repeat="item in popupAlokasiDanaTemp | filter:{category:'Agresif'}" layout='row' class="marg-top-5 text-left text-capitalize">
                    <div flex class="pad-left-20">
                      <label class="label-middle pad-right-5" ng-model="item.model">{{item.label}} </label>
                    </div>
                    <div flex="10" class="pad-top-5">
                      <md-checkbox md-no-ink aria-label="Checkbox No Ink" ng-model="item.checked" ng-change="addRemoveBtn(item, item.checked)" md-colors="red">
                      </md-checkbox>
                    </div>
                  </div>
                </div>`,
      cssClass: 'pru-alert with-header pru-logo-text button-side-duo',
      scope: $scope,
      buttons: [
      {
        text: 'Batal',
        type: 'button-dark-gray',
        onTap: function(e) {
        }
      },
      {
        text: 'Lanjut',
        type: 'button-assertive',
        onTap: function(e) {
          $scope.addSavebtn();
        }
      }
      ]
    });
  };

  var showListAlokasi = 10;

  if (showListAlokasi > 0) {
    for (var l = 0; l < showListAlokasi; l++) {
      popupAlokasiDanaTemp[l]['checked'] = true;
      popupAlokasiDanaTemps.push(popupAlokasiDanaTemp[l]);
    }
  }

  $scope.manfaat = 
    {
      minimumUangPertanggungan : 999999999999,
      maksimumUangPertanggungan : 999999999999,
      premiUnapplied:999999999999,
      jenisProduk:"PRU<em class='font-100'>link assurance account</em>",
      besarPremiTahunan:"Rp 10,000,000.00",
      totalPremi: "Rp 999,999,999,999.00",
      rencanaPembayaran:10,
      alternatifRencanaPembayaran:99,
      halamanRingkasan:{
        tahun1:45,
        tahun2:55,
        tahun3:65
      }
    }

  $scope.dataExample = 1;
  $scope.addBenefitModal = function(ev){
    $mdDialog.show({
      controller: DialogBenefitListController,
      templateUrl: 'components/newSqs/templates/list-detail-manfaat.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  }

  var takenBenefits = [];

  var benefitLists = [
    {id:1, name:"PRU<em>personal acciden death</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Accident"},
    {id:2, name:"PRU<em>personal acciden death plus</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Accident"},
    {id:3, name:"PRU<em>personal acciden death & disablement</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Accident"},
    {id:4, name:"PRU<em>personal acciden death & disablement plus</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Accident"},
    {id:5, name:"PRU<em>med</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Health"},
    {id:6, name:"PRU<em>hospital & surgical cover</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Health"},
    {id:7, name:"PRU<em>crisis cover 34</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Critical Illness"},
    {id:8, name:"PRU<em>multiple crisis cover</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Critical Illness"},
    {id:9, name:"PRU<em>crisis income</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Critical Illness"},
    {id:10, name:"PRU<em>early stage crisis cover plus</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Critical Illness"},
    {id:11, name:"PRU<em>payor 33</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:12, name:"PRU<em>waiver 33</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:13, name:"PRU<em>spouse payor 33</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:14, name:"PRU<em>spouse waiver 33</em>", input_1: false, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:15, name:"PRU<em>parent payor 33 - 1</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:16, name:"PRU<em>parent payor 33 - 2</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:17, name:"PRU<em>early stage payor</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:18, name:"PRU<em>early stage spouse payor</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:19, name:"PRU<em>early stage parent payor - 1</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:20, name:"PRU<em>early stage parent payor - 2</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:21, name:"PRU<em>link term</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Death Rider"},
    {id:22, name:"PRU<em>crisis cover 34/em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Death Rider"},
    {id:23, name:"PRU<em>multiple crisis cover</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Death Rider"}
  ]

  var benefitGroups = ["PAA Accident", "PAA Health", "PAA Critical Illness", "PAA Premium Waiver", "PAA Death Rider"];

  $scope.takenBenefits = takenBenefits;

  // With Taken dataExample 
  var takenBenefitExample = 2;
  if (takenBenefitExample > 0){
    for(var p = 0 ; p < takenBenefitExample;p++){
      benefitLists[p]['taken'] = true;
      takenBenefits.push(benefitLists[p]);
    }
  }

  $scope.editTakenBenefit = false;

  $scope.editTakenBenefitAction = function (ev, editTakenBenefit){
    $scope.editTakenBenefit = !editTakenBenefit;
  }

  function DialogBenefitListController($scope, $mdDialog) {

    var temptakenBenefits = [];
    var tbl = takenBenefits.length;
    if (tbl > 0){
      for (var t = 0; t < tbl; t++){
        temptakenBenefits.push(takenBenefits[t]);
      }
    }

    $scope.benefitLists = benefitLists;
    $scope.benefitGroups = benefitGroups;
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function() {
      var arrLength = temptakenBenefits.length;
      takenBenefits.splice(0,takenBenefits.length)
      if (arrLength>0){
        if (arrLength>1){
          for (var i = 0; i < arrLength;i++){
            takenBenefits.push(temptakenBenefits[i]);
          }
        }else{
          takenBenefits.push(temptakenBenefits[0]);
        }
        var bntLength = temptakenBenefits.length;
        for (var i=0; i < bntLength;i++){
          var  index = benefitLists.indexOf(temptakenBenefits[i]);
          if (index > -1){
            benefitLists[index]['taken'] = true;
          }else{
            benefitLists[index]['taken'] = false;
          }
        }
      }
      $mdDialog.hide();
    };

    $scope.addRemoveBenefit = function(obj, model){
      if(model == true){
        temptakenBenefits.push(obj);
      }else{
        var  index = temptakenBenefits.indexOf(obj);
        if (index > -1){
          temptakenBenefits.splice(index,1);
        }
      }
    }
  }
});
