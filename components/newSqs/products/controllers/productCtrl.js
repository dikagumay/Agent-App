var pruforce = angular.module('PruForce');

pruforce.controller('productCtrl', function($scope, $ionicScrollDelegate,/* $element,*/ $ionicPopup, $mdDialog, $timeout, $mdToast) {
  
  $scope.menuTabs = [
    {name: "Pilih Produk",  url: "components/newSqs/products/pilih-produk-filled.html"},
    {name: "Manfaat",  url: "components/newSqs/products/manfaat.html"}
  ]

  $scope.currentMenuTab = $scope.menuTabs[0];
  $scope.calcHide = false;

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

  $scope.pilihProdukFilled = $scope.dataALokasiDana; 
  $scope.dataALokasiDana = {
    pilihTemplate : "ya",
    noSpaja : "0A1234",
    jenisProduk : "prulink",
    namelist: "Crisis Cover",
    pembayaranFrekuensi: "Bulanan",
    frequensi: "bulanan",
    produkNama: "PRUlink assurance account (RUP)",
    alokasiDanaFilled:[ 
      {id:1, label:"PRUlink Rupiah Managed Fund", model:"alokasiDanaFilled1", checked:false, data:{val1: ""}}, 
      {id:2, label:"PRUlink Rupiah Fixed Income Fund", model:"alokasiDanaFilled2", checked:false, data:{val1: "" }}, 
      {id:3, label:"PRUlink Rupiah Equity Fund", model:"alokasiDanaFilled3", checked:false, data:{val1: "" }}, 
      {id:4, label:"PRUlink Rupiah Cash Fund", model:"alokasiDanaFille4", checked:false, data:{val1: "" }}, 
      {id:5, label:"PRUlink Rupiah Managed Fund Plus", model:"alokasiDanaFilled5", checked:true, data:{val1: "" }}, 
      {id:6, label:"PRUlink Rupiah Indonesia Greater China Equity Fund", model:"alokasiDanaFilled6", checked:true, data:{val1: ""}},
      {id:7, label:"PRUlink Rupiah Equity Fund Plus", model:"alokasiDanaFilled7", checked:true, data:{val1: ""}},
      {id:8, label:"PRUlink Rupiah Infrastructure & Consumer Equity Fund", model:"alokasiDanaFilled8", checked:true, data:{val1: ""}},
      {id:9, label:"PRUlink Rupiah Asia Pasifik Equity Fund", model:"alokasiDanaFilled9", checked:true, data:{val1: "" }},
      {id:10, label:"PRUlink Rupiah Value Discovery Equity Fund", model:"alokasiDanaFilled10", checked:true, data:{val1: "" }} 
    ] 
  }

  $scope.searchProductName;

  $scope.clearProductName = function() {
    $scope.searchProductName = '';
    console.log($scope.searchProductName);
  };

  $scope.registerPolicyHolders = [
    {category: "perlindungan", key: "PRUmy child", value: "PRUmy child"},
    {category: "perlindungan", key: "PRUlink edu protection", value: "PRUlink edu protection"},
    {category: "perlindungan", key: "PRUlink fixed pay (RUP)", value: "PRUlink fixed pay (RUP)"},
    {category: "perlindungan", key: "PRUlink syariah assurance account (RUP)", value: "PRUlink syariah assurance account (RUP)"},
    {category: "perlindungan", key: "PRUlink syariah edu protection", value: "PRUlink syariah edu protection"},
    {category: "perlindungan", key: "PRUlink assurance account (RUP)", value: "PRUlink assurance account (RUP)"},
    {category: "perlindungan", key: "PRUlink assurance account (USD)", value: "PRUlink assurance account (USD)"},
    {category: "pembayaran", key: "PRUlink investor account (RUP)", value: "PRUlink investor account (RUP)"},
    {category: "pembayaran", key: "PRUlink investor account (USD)", value: "PRUlink investor account (USD)"},
    {category: "pembayaran", key: "PRUlink syariah investor account (RUP)", value: "PRUlink syariah investor account (RUP)"},
    {category: "pembayaran", key: "PRUlink capital account (RUP)", value: "PRUlink capital account (RUP)"},
    {category: "asuransiBerjangka", key: "PRUlife cover", value: "PRUlife cover"},
    {category: "asuransiBerjangka", key: "PRUsafe guard", value: "PRUsafe guard"},
    {category: "asuransiTraditional", key: "PRUuniversal life", value: "PRUuniversal life"},
    {category: "dwiGuna", key: "PRUprotector plan", value: "PRUprotector plan"}
    
  ]

  $scope.popupAlokasiDana = [
    {id:1, category: "Moderat", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Managed Fund</em>", model:"alokasiDanaFilled1", checked:true, taken: false , data:{val1: ""}}, 
    {id:2, category: "Moderat", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Fixed Income Fund</em>", model:"alokasiDanaFilled2", checked:true, taken: false  , data:{val1: "" }}, 
    {id:3, category: "Moderat", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Equity Fund</em>", model:"alokasiDanaFilled3", checked:true, taken: false  , data:{val1: "" }}, 
    {id:4, category: "Moderat", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Cash Fund</em>", model:"alokasiDanaFille4", checked:true, taken: false  , data:{val1: "" }}, 
    {id:5, category: "Moderat", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Managed Fund Plus</em>", model:"alokasiDanaFilled5", checked:true, taken: false  , data:{val1: "" }}, 
    {id:6, category: "Agresif", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Indonesia Greater China Equity Fund</em>", model:"alokasiDanaFilled6", checked:false, taken: false, data:{val1: ""}},
    {id:7, category: "Agresif", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Equity Fund Plus</em>", model:"alokasiDanaFilled7", checked:false, taken: false, data:{val1: ""}},
    {id:8, category: "Agresif", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Infrastructure & Consumer Equity Fund</em>", model:"alokasiDanaFilled8", checked:false, taken: false, data:{val1: ""}},
    {id:9, category: "Agresif", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Asia Pasifik Equity Fund</em>", model:"alokasiDanaFilled9", checked:false, taken: false, data:{val1: "" }},
    {id:10, category: "Agresif", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Value Discovery Equity Fund</em>", model:"alokasiDanaFilled10", checked:false, taken: false, data:{val1: "" }} ,
    {id:11, category: "konservatif", name:"<strong>PRU</strong><em class='font-100'>link Rupiah Cash</em>", model:"alokasiDanaFilled11", checked:false, taken: false, data:{val1: "" }},
    {id:12, category: "konservatif", name:"<strong>PRU</strong><em class='font-100'>link Syariah Rupiah Cash & Bond Fund</em>", model:"alokasiDanaFilled12", checked:false, taken: false, data:{val1: "" }},
    {id:13, category: "Moderat", name:"<strong>PRU</strong><em class='font-100'>link US Dollar Fixed Income Fund</em>", model:"alokasiDanaFilled13", checked:false, taken: false, data:{val1: "" }},
    {id:14, category: "Moderat", name:"<strong>PRU</strong><em class='font-100'>link Syariah Rupiah Managed Fund</em>", model:"alokasiDanaFilled14", checked:false, taken: false, data:{val1: "" }},
    {id:15, category: "Agresif", name:"<strong>PRU</strong><em class='font-100'>link US Dollar Indonesia Greater China Equity Fund</em>", model:"alokasiDanaFilled15", checked:false, taken: false, data:{val1: "" }},
    {id:16, category: "Agresif", name:"<strong>PRU</strong><em class='font-100'>link Syariah Rupiah Equity Fund</em>", model:"alokasiDanaFilled16", checked:false, taken: false, data:{val1: "" }},
    {id:17, category: "Agresif", name:"<strong>PRU</strong><em class='font-100'>link Syariah Rupiah Infrastructure & Consumer Equity Fund</em>", model:"alokasiDanaFilled17", checked:false, taken: false, data:{val1: "" }},
    {id:18, category: "konservatif", name:"<strong>PRU</strong><em class='font-100'>link Syariah Rupiah  Asia Pasifik Equity Fund</em>", model:"alokasiDanaFilled18", checked:false, taken: false, data:{val1: "" }}
  ]

  $scope.btnAlokasiDana = function(e) {
    var myPopup = $ionicPopup.show({
      title: "Pilih investasi yang ingin ditambahkan",
      templateUrl: "components/newSqs/products/list-investation.html",
      cssClass: 'pru-alert white-header popup-large pru-logo-text button-side-duo',
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
          $scope.addAlokasiDana();
        }
      }
      ]
    });
  };

  $scope.tempTakenAlokasiDana = [];

  $scope.takenAlokasiDana = function () {
    for (var t = 0; t < $scope.popupAlokasiDana.length; t++){
      if($scope.popupAlokasiDana[t].checked == true){
        $scope.popupAlokasiDana[t].taken = true;
      }else{
        $scope.popupAlokasiDana[t].taken = false;
      }
    }
  }

  $scope.addAlokasiDana = function () {
    for (var t = 0; t < $scope.popupAlokasiDana.length; t++){
      if($scope.popupAlokasiDana[t].taken == true){
        $scope.popupAlokasiDana[t].checked = true;
      }else{
        $scope.popupAlokasiDana[t].checked = false;
      }
    }
  }

  $scope.addBenefitModal = function(e) {
    var myPopup = $ionicPopup.show({
      title: "Pilih Manfaat yang ingin Ditambahkan",
      templateUrl: "components/newSqs/products/list-manfaat.tmpl.html",
      cssClass: 'pru-alert popup-large white-header button-side-duo',
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
          $scope.answer();
        }
      }
      ]
    });
  };

  var takenBenefits = [];

  var benefitLists = [
    {id:1, name:"<strong>PRU</strong><em>personal acciden death</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Accident"},
    {id:2, name:"<strong>PRU</strong><em>personal acciden death plus</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Accident"},
    {id:3, name:"<strong>PRU</strong><em>personal acciden death & disablement</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Accident"},
    {id:4, name:"<strong>PRU</strong><em>personal acciden death & disablement plus</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Accident"},
    {id:5, name:"<strong>PRU</strong><em>med</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Health"},
    {id:6, name:"<strong>PRU</strong><em>hospital & surgical cover</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Health"},
    {id:7, name:"<strong>PRU</strong><em>crisis cover 34</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Critical Illness"},
    {id:8, name:"<strong>PRU</strong><em>multiple crisis cover</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Critical Illness"},
    {id:9, name:"<strong>PRU</strong><em>crisis income</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Critical Illness"},
    {id:10, name:"<strong>PRU</strong><em>early stage crisis cover plus</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Critical Illness"},
    {id:11, name:"<strong>PRU</strong><em>payor 33</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:12, name:"<strong>PRU</strong><em>waiver 33</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:13, name:"<strong>PRU</strong><em>spouse payor 33</em>", input_1:true, input_2:true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:14, name:"<strong>PRU</strong><em>spouse waiver 33</em>", input_1: false, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:15, name:"<strong>PRU</strong><em>parent payor 33 - 1</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:16, name:"<strong>PRU</strong><em>parent payor 33 - 2</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:17, name:"<strong>PRU</strong><em>early stage payor</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:18, name:"<strong>PRU</strong><em>early stage spouse payor</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:19, name:"<strong>PRU</strong><em>early stage parent payor - 1</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:20, name:"<strong>PRU</strong><em>early stage parent payor - 2</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Premium Waiver"},
    {id:21, name:"<strong>PRU</strong><em>link term</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Death Rider"},
    {id:22, name:"<strong>PRU</strong><em>crisis cover 34/em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Death Rider"},
    {id:23, name:"<strong>PRU</strong><em>multiple crisis cover</em>", input_1: true, input_2: true, input_3:true, taken:false, group:"PAA Death Rider"}
  ]

  var benefitGroups = ["PAA Accident", "PAA Health", "PAA Critical Illness", "PAA Premium Waiver", "PAA Death Rider"];

  $scope.takenBenefits = takenBenefits;

  // With Taken dataExample 
  // var takenBenefitExample = 2;
  // if (takenBenefitExample > 0){
  //   for(var p = 0 ; p < takenBenefitExample;p++){
  //     benefitLists[p]['taken'] = true;
  //     takenBenefits.push(benefitLists[p]);
  //   }
  // }

  $scope.editTakenBenefit = false;

  $scope.editTakenBenefitAction = function (ev, editTakenBenefit){
    $scope.editTakenBenefit = !editTakenBenefit;
  }

  var tempDeleteBenefits = [];

  $scope.deleteTakenBenefit = false;

  $scope.addDeleteTakenBenefitItem = function(obj, model){
    if(model == true){
      tempDeleteBenefits.push(obj);
    }else{
      var  index = tempDeleteBenefits.indexOf(obj);
      if (index > -1){
        tempDeleteBenefits.splice(index,1);
      }
    }
    if (tempDeleteBenefits.length > 0){
      $scope.deleteTakenBenefit = true;
    }else{
      $scope.deleteTakenBenefit = false;
    }
  }

  $scope.deleteTakenBenefitAction = function(){
    var bntLength = tempDeleteBenefits.length;
    for (var i=0; i < bntLength;i++){
      var  index = benefitLists.indexOf(tempDeleteBenefits[i]);
      var  index2 = takenBenefits.indexOf(tempDeleteBenefits[i]);
      if (index > -1){
        benefitLists[index]['taken'] = false;
      }
      if (index2 > -1){
        takenBenefits.splice(index2,1);
      }
    }
    $scope.deleteTakenBenefit = false;
    tempDeleteBenefits = [];
  }

  $scope.DialogBenefitListController = function() {

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
        var index = temptakenBenefits.indexOf(obj);
        if (index > -1){
          temptakenBenefits.splice(index,1);
        }
      }
    }
  }

  $scope.popupAlokasiDanas =[];

  $scope.addListPopup = function() {
    var labels= $scope.popupAlokasiDana;
    var id = $scope.popupAlokasiDana.length +1;
    var listObj = {id:id, label:$scope.popupAlokasiDana.label, model:"alokasi"+id, checked:true, data:{val1: ""}};
    $scope.popupAlokasiDana.push(listObj);
  }



  $scope.confirmRemovePopup = function(model){
    var msgPopup = null;
    if(model == "ilustrasi"){
      msgPopup = "Apakah anda ingin menghapus ilustrasi <br> SKDJFHASKJDFKA - Sjsdfjsdf8921731 ?"
    }else if(model == "topup"){
      msgPopup = "Apakah anda ingin menghapus <br> TOP UP 1?"
    }else if(model == "penarikan"){
      msgPopup = "Apakah anda ingin menghapus <br> penarikan 1?"
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

  $scope.manfaatTopup = [{id: '1', yearStart: 'yearStart_1', yearEnd: 'yearEnd_1', amount: "amount_1"}]

  $scope.addNewTopup = function(){
    var newTopup = $scope.manfaatTopup.length+1;
    $scope.manfaatTopup.push({'id': newTopup,
                              yearStart: 'yearStart_' + newTopup,
                              yearEnd: 'yearEnd_' +
                              newTopup, amount: "amount_" + newTopup});
  }

  $scope.manfaatPenarikan = [{id: '1', yearStart: 'yearStart_1', yearEnd: 'yearEnd_1', amount: "amount_1"}]

  $scope.addNewPenarikan = function(){
    var newPenarikan = $scope.manfaatPenarikan.length+1;
    $scope.manfaatPenarikan.push({'id': newPenarikan,
                              yearStart: 'yearStart_' + newPenarikan,
                              yearEnd: 'yearEnd_' +
                              newPenarikan, amount: "amount_" + newPenarikan});
  }
});
