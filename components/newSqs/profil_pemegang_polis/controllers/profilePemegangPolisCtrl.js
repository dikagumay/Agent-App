var pruforce = angular.module('PruForce');

pruforce.controller('profilePemegangPolisCtrl', function($scope, $ionicScrollDelegate, $ionicPopup, $rootScope, $state, $localStorage , $document, focus, $window, $timeout) {

  $scope.menuTabs = [
    {name: "Pemegang polis",  url: "components/newSqs/profil_pemegang_polis/pemegang-polis-filled.html"},
    {name: "Tertanggung",  url: "components/newSqs/profil_pemegang_polis/tertanggung-filled.html"}
  ]

  $scope.now = new (Date);

  $scope.currentMenuTab = $scope.menuTabs[0];

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

  $scope.searchPemegangPolis;

  $scope.clearPemegangPolis = function() {
    $scope.searchPemegangPolis = '';
    console.log($scope.searchPemegangPolis);
  };

  $scope.registerPolicyHolders = [
    {key: "tertanggung utama", value: "Tertanggung Utama"},
    {key: "tertanggung kedua", value: "Tertanggung Kedua"},
    {key: "tertanggung ketiga", value: "Tertanggung Ketiga"},
    {key: "tertanggung keempat", value: "Tertanggung Keempat"},
    {key: "tertanggung kelima", value: "Tertanggung Kelima"},
  ]

  $scope.totalIncomes = [
    {key: "tertanggung utama", value: "Kurang dari Rp 2,5 Juta"},
    {key: "tertanggung kedua", value: "Rp 2,5 Juta s/d 5 Juta"},
    {key: "tertanggung ketiga", value: "Rp 5 Juta s/d 7,5 Juta"},
    {key: "tertanggung keempat", value: "Rp 7,5 Juta s/d 10 Juta"},
    {key: "tertanggung kelima", value: "Rp 10 Juta s/d 25 Juta"},
  ]

  $scope.polis = {
    nameHolder : "Angela del Angel",
    tipe : "individu",
    tanggalLahir: new Date(2000, 0, 12, 0, 0, 0, 0),
    work: "pelayantoko",
    descriptionWork: "Melayani tamu toko kecil",
    bidang : "toko",
    instansi : "kehutanan",
    jabatan : "asistant",
    pembayaran: "tertanggungutama"
  }

  $scope.insuredDatas= [ 
    {  
      id: 1,
      alias:"Tertanggung Utama", 
      name: "Angela del Angel", 
      jenisKelaminPerokok: 1, 
      pekerjaan: 1,  
      kelasPekerjaan: "2", 
      deskripsiPekerjaan: "Membantu menyiapkan dokumen", 
      bidangUsaha: "Makanan cepat saji", 
      totalPenghasilanUtama: 1, 
      alamat1: "Jalan Martabak Manis Gang Ketan Blok E/20", 
      kota: 1, 
      usiaKehamilan:1, 
      usiaTahunBerikutnya:"1", 
      departemen:1, 
      pangkat:1, 
      berlakuSurut:"ya", 
      subStandard: false, 
      option:"utama", 
      substd:[ 
        {id:1, model:"substd1", checked:true, data:{val1: "L1", val2: "L2" }}, 
        {id:2, model:"substd2", checked:true, data:{val1: "C1", val2: "C2" }}, 
        {id:3, model:"substd3", checked:true, data:{val1: "B1", val2: "B2" }}, 
        {id:4, model:"substd4", checked:true, data:{val1: "E1", val2: "E2" }}, 
        {id:5, model:"substd5", checked:true, data:{val1: "A1", val2: "A2" }}, 
        {id:6, model:"substd6", checked:true, data:{val1: "T1", val2: "T2" }},
        {id:7, model:"substd7", checked:true, data:{val1: "H1", val2: "H2" }} 
      ], 
      tanggalLahir: new Date(1995, 0, 12, 0, 0, 0, 0), 
      tanggalPerkiraanLahir: new(Date), 
      tanggalBerlakuSurut: new(Date) 
    }, 
    {  
      id: 2,
      alias:"Tertanggung Kedua", 
      name: "Angela del Angel 2", 
      jenisKelaminPerokok: 1, 
      pekerjaan: 1,  
      kelasPekerjaan: "2", 
      deskripsiPekerjaan: "Membantu menyiapkan dokumen", 
      bidangUsaha: "Makanan cepat saji", 
      totalPenghasilanUtama: 1, 
      alamat1: "Jalan Martabak Manis Gang Ketan Blok E/20", 
      kota: 1, 
      usiaKehamilan:1, 
      usiaTahunBerikutnya:"1", 
      departemen:1, 
      pangkat:1, 
      berlakuSurut:"ya", 
      subStandard:"ya", 
      substd:[ 
        {id:1, model:"substd1", checked:true, data:{val1: "L1", val2: "L2" }}, 
        {id:2, model:"substd2", checked:true, data:{val1: "C1", val2: "C2" }}, 
        {id:3, model:"substd3", checked:false, data:{val1: "B1", val2: "B2" }}, 
        {id:4, model:"substd4", checked:true, data:{val1: "D1", val2: "D2" }}, 
        {id:5, model:"substd5", checked:true, data:{val1: "E1", val2: "E2" }}, 
        {id:6, model:"substd6", checked:false, data:{val1: "F1", val2: "F2" }} 
      ], 
      tanggalLahir: new(Date), 
      tanggalPerkiraanLahir: new(Date), 
      tanggalBerlakuSurut: new(Date) 
    }, 
    {  
      id: 3,
      alias:"Tertanggung Ketiga", 
      name: "Angela del Angel 3", 
      jenisKelaminPerokok: 1, 
      pekerjaan: 1,  
      kelasPekerjaan: "2", 
      deskripsiPekerjaan: "Membantu menyiapkan dokumen", 
      bidangUsaha: "Makanan cepat saji", 
      totalPenghasilanUtama: 1, 
      alamat1: "Jalan Martabak Manis Gang Ketan Blok E/20", 
      kota: 1, 
      usiaKehamilan:1, 
      usiaTahunBerikutnya:"1", 
      departemen:1, 
      pangkat:1, 
      berlakuSurut:"ya", 
      subStandard:"ya", 
      substd:[ 
        {id:1, model:"substd1", checked:true, data:{val1: "L1", val2: "L2" }}, 
        {id:2, model:"substd2", checked:true, data:{val1: "C1", val2: "C2" }}, 
        {id:3, model:"substd3", checked:false, data:{val1: "B1", val2: "B2" }}, 
        {id:4, model:"substd4", checked:true, data:{val1: "D1", val2: "D2" }}, 
        {id:5, model:"substd5", checked:true, data:{val1: "E1", val2: "E2" }}, 
        {id:6, model:"substd6", checked:false, data:{val1: "F1", val2: "F2" }} 
      ], 
      tanggalLahir: new(Date), 
      tanggalPerkiraanLahir: new(Date), 
      tanggalBerlakuSurut: new(Date) 
    }, 
    {  
      id: 4,
      alias:"Tertanggung Keempat", 
      name: "Angela del Angel 4", 
      jenisKelaminPerokok: 1, 
      pekerjaan: 1,  
      kelasPekerjaan: "2", 
      deskripsiPekerjaan: "Membantu menyiapkan dokumen", 
      bidangUsaha: "Makanan cepat saji", 
      totalPenghasilanUtama: 1, 
      alamat1: "Jalan Martabak Manis Gang Ketan Blok E/20", 
      kota: 1, 
      usiaKehamilan:1, 
      usiaTahunBerikutnya:"1", 
      departemen:1, 
      pangkat:1, 
      berlakuSurut:"ya", 
      subStandard:"ya", 
      substd:[ 
        {id:1, model:"substd1", checked:true, data:{val1: "L1", val2: "L2" }}, 
        {id:2, model:"substd2", checked:true, data:{val1: "C1", val2: "C2" }}, 
        {id:3, model:"substd3", checked:false, data:{val1: "B1", val2: "B2" }}, 
        {id:4, model:"substd4", checked:true, data:{val1: "D1", val2: "D2" }}, 
        {id:5, model:"substd5", checked:true, data:{val1: "E1", val2: "E2" }}, 
        {id:6, model:"substd6", checked:false, data:{val1: "F1", val2: "F2" }} 
      ], 
      tanggalLahir: new(Date), 
      tanggalPerkiraanLahir: new(Date), 
      tanggalBerlakuSurut: new(Date) 
    }, 
    {  
      id: 5,
      alias:"Tertanggung Kelima", 
      name: "Angela del Angel 5", 
      jenisKelaminPerokok: 1, 
      pekerjaan: 1,  
      kelasPekerjaan: "2", 
      deskripsiPekerjaan: "Membantu menyiapkan dokumen", 
      bidangUsaha: "Makanan cepat saji", 
      totalPenghasilanUtama: 1, 
      alamat1: "Jalan Martabak Manis Gang Ketan Blok E/20", 
      kota: 1, 
      usiaKehamilan:1, 
      usiaTahunBerikutnya:"1", 
      departemen:1, 
      pangkat:1, 
      berlakuSurut:"ya", 
      subStandard:"ya", 
      substd:[ 
        {id:1, model:"substd1", checked:true, data:{val1: "L1", val2: "L2" }}, 
        {id:2, model:"substd2", checked:true, data:{val1: "C1", val2: "C2" }}, 
        {id:3, model:"substd3", checked:false, data:{val1: "B1", val2: "B2" }}, 
        {id:4, model:"substd4", checked:true, data:{val1: "D1", val2: "D2" }}, 
        {id:5, model:"substd5", checked:true, data:{val1: "E1", val2: "E2" }}, 
        {id:6, model:"substd6", checked:false, data:{val1: "F1", val2: "F2" }} 
      ], 
      tanggalLahir: new(Date), 
      tanggalPerkiraanLahir: new(Date), 
      tanggalBerlakuSurut: new(Date) 
    }] 
 
  $scope.profileTertanggung =  $scope.insuredDatas[0]; 
  $scope.profileTertanggungTemp = $scope.insuredDatas[0]; 
 
  $scope.editSubstandardModel = false; 
  $scope.editInsuredName = false; 
  $scope.editSubstandard = function(state){ 
    $scope.editSubstandardModel = !state; 
  } 

  $scope.arrayForDeleteSubStandards = function(){
    var arr = [];
    for(var i = 0; i < $scope.profileTertanggung["substd"].length; i++) {
      var obj = $scope.profileTertanggung["substd"][i];
      if (obj.checked == true){
        arr.push(obj.id)
      }      
    }
    return arr;
  }

  $scope.deleteSubStandard = function(){
    var arr = $scope.arrayForDeleteSubStandards();
    for(var i = 0; i < $scope.profileTertanggung["substd"].length; i++) {
      var obj = $scope.profileTertanggung["substd"][i];
      if(arr.indexOf(obj.id) !== -1) {
        $scope.profileTertanggung["substd"].splice(i, 1);
        i--;
      }
    }
  }

  $scope.addSubstandards = function(){
    var id = $scope.profileTertanggung["substd"].length +1;
    var obj = {id:id, model:"substd"+id, checked:true, data:{val1: "B1", val2: "B2" }};
    $scope.profileTertanggung["substd"].push(obj);
  }

  $scope.arrayForDeleteInsured = []; 
 
  $scope.addInsuredList = function(insuredItem, id){ 
    if(insuredItem == true){ 
      $scope.arrayForDeleteInsured.push(id); 
    }else{ 
      var index = $scope.arrayForDeleteInsured.indexOf(id); 
      if(index !== -1) { 
        $scope.arrayForDeleteInsured.splice(index, 1); 
      } 
    } 
    console.log($scope.arrayForDeleteInsured); 
  } 

  $scope.deleteInsured = function(insured){ 
    var arr = $scope.arrayForDeleteInsured; 
    for(var i = 0; i < $scope.insuredDatas.length; i++) { 
      var obj = $scope.insuredDatas[i]; 
      if(arr.indexOf(obj.id) !== -1) { 
          $scope.insuredDatas.splice(i, 1); 
          i--; 
      } 
    } 
  } 
 
  $scope.addSubstandards = function(){ 
    var id = $scope.profileTertanggung["substd"].length +1; 
    var obj = {id:id, model:"substd"+id, checked:true, data:{val1: "B1", val2: "B2" }}; 
   $scope.profileTertanggung["substd"].push(obj); 
  } 
 
  $scope.insuredName = {isExpanded:false}; 
  $scope.selectedItemChange = function (item) { 
    if(item){ 
      $scope.profileTertanggung = item; 
    }else{ 
      $scope.profileTertanggung = $scope.insuredDatas[0]; 
    } 
    $scope.insuredName = {isExpanded:false}; 
     
  } 
 
  $scope.insuredMaxPopUp = function(e) { 
    var myPopup = $ionicPopup.show({ 
      title: "<strong>PRU</strong><em>force</em> SQS", 
      template: 'Batas maksimal adalah 5 tertanggung.', 
      cssClass: 'pru-alert pru-logo-text', 
      scope: $scope, 
      buttons: [ 
      { 
        text: 'Kembali', 
        type: 'button-assertive', 
        onTap: function(e) { 
        } 
      } 
      ] 
    }); 
  }; 
 
  $scope.addInsuredData = function(){ 
    var arrLength = $scope.insuredDatas.length; 
    if(arrLength>=5){ 
      $scope.insuredMaxPopUp(); 
    }else{ 
      $scope.profileTertanggung = []; 
    } 
  } 

  $scope.nextFunction = function(e) {
    var myPopup = $ionicPopup.show({
      title: "",
      template: "<small class='text-capitalize'>Data Pemegang Polis berikut belum lengkap:</small><br><span class='small'>Pekerjaan</span>",
      cssClass: 'pru-alert without-header pru-logo-text text-center border-radius-30',
      scope: $scope,
      buttons: [
      {
        text: 'Lengkapi Data',
        type: 'button-dark-gray width-100 display-block',
        onTap: function(e) {
        }
      }
      ]
    });
  };

  $scope.nextFunctionTertanggung = function(e) {
    var myPopup = $ionicPopup.show({
      title: "<strong>PRU</strong><em>force</em> SQS",
      template: "<small class='text-capitalize'>Anda belum melengkapi data-data berikut:</small><br><span class='small'>Pekerjaan</span>",
      cssClass: 'pru-alert pru-logo-text button-side-duo text-center border-radius-30',
      scope: $scope,
      buttons: [
      {
        text: 'Lengkapi Data',
        type: 'button-assertive width-100 display-block',
        onTap: function(e) {
        }
      }
      ]
    });
  };

  $scope.calculateAgeFunc = function (birthday){
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  $scope.doFocus = function(id, tab, e) {
    $scope.openValidation = false;
    if(tab == 'pp'){
      var menuTab_ = $scope.menuTabs[0]
    }else if( tab = 't'){
      var menuTab_ = $scope.menuTabs[1]
    }
    if(menuTab_.url != $scope.currentMenuTab.url){
      $scope.movingTab(e, menuTab_);
      $timeout(function(){focus(id);}, 100);
      console.log('wae');
    }else{
      focus(id);
    }
    
  };

  $scope.numClassPemegangPolisItems = function(className) {
    var result = $window.document.getElementsByClassName(className);
     return result.length;
  };

  //Validator
  $scope.validationRule={
    pemegangPolis:{
      age: 18,
      nameMax:5,
      jobDesc:5
    },
    tertanggung:{
      age: 18
    }
  }

  var keysPP = Object.keys($scope.validationRule.pemegangPolis);
  var keysT = Object.keys($scope.validationRule.tertanggung);
  $scope.ruleLengthPemegangPolis = keysPP.length;
  $scope.ruleLengthTertanggung = keysT.length;
  $scope.ruleLength = $scope.ruleLengthPemegangPolis+$scope.ruleLengthTertanggung;
  

  $scope.produkmanfaat = function () {
    $rootScope.AlertDialog("search page");
    $state.go("produk-manfaat");
  }
})


pruforce.config(function($mdDateLocaleProvider) {
  $mdDateLocaleProvider.formatDate = function(date) {
    return date ? moment(date).format('DD MMMM YYYY') : '';
  };
});

pruforce.factory('focus', function($timeout, $window, $ionicScrollDelegate) {
  return function(id) {
    $timeout(function() {
      var element = $window.document.getElementById(id);
      var targetPosition = $('#'+id).offset().top;
      var currentPosition = $ionicScrollDelegate.getScrollPosition().top;
      var posiblePosition = (currentPosition + targetPosition) - 175;
      if (targetPosition<50){
        $ionicScrollDelegate.scrollTo(0, posiblePosition, true )
      }
      $timeout(function(){
      if(element)
        if(element.children[1]){
          var oid = element.children[1].children[0].id;
          var u = $window.document.getElementById(oid);
          if(u)
          u.focus();
        }else{
          if(element)
          element.focus();
        }
      }, 200);
    });
  };
});

pruforce.directive('eventFocus', function(focus) {
    return function(scope, elem, attr) {
      elem.on(attr.eventFocus, function() {
        focus(attr.eventFocusId);
      });
      scope.$on('$destroy', function() {
        elem.off(attr.eventFocus);
      });
    };
  });