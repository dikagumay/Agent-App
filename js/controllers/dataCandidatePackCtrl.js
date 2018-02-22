var pruforce = angular.module('PruForce');

pruforce.controller('dataCandidatePackCtrl', function($scope, $ionicScrollDelegate, $ionicPopup, $ionicModal, CandidatePackService, $filter, $mdToast, $rootScope, MasterDataService) {
  function init() {
    for (var i = 0; i < $(".tab-item").length; i++) {
      $($(".tab-item")[i]).attr("data-position-left", ($($(".tab-item")[i]).position().left - 20));
    }
  }
  
  $scope.dataCandidateParam = {
	  agentId: $rootScope.agent.code,
	  npa: 'NPA004'
  }
  
  $scope.document = {
     ktpImage: null,
     profileImage: null,
     bankAccount: null,
     npwp: null
  }
  
  $scope.candidatePack = {};
  $scope.lov = {};
  
  $scope.selected = true;
  
  $scope.lov.religion = [
     {value: "Islam", label:"Islam", selected:false},
     {value: "Katolik", label:"Katolik", selected:false},
     {value: "Protestan", label:"Protestan", selected:false},
     {value: "Buddha", label:"Buddha", selected:false},
     {value: "Hindu", label:"Hindu", selected:false},
     {value: "Khonghucu", label:"Khonghucu", selected:false}
  ];
  
  $scope.lov.gender = [
     {value: "Wanita", label:"Wanita", selected:false},
     {value: "Laki-laki", label:"Laki-laki", selected:false}
  ];
  
  $scope.lov.city = [
    {value: "Bandung", label:"Bandung", selected:false},
   	{value: "Bogor", label:"Bogor", selected:false},
   	{value: "Bekasi", label:"Bekasi", selected:false},
   	{value: "Jakarta", label:"Jakarta", selected:false},
  ];
  
  $scope.lov.province = [
	{value: "Aceh", label:"Aceh", selected:false},
	{value: "Jawa Barat", label:"Jawa Barat", selected:false},
	{value: "Jawa Timur", label:"Jawa Timur", selected:false},
	{value: "Sulawesi", label:"Sulawesi", selected:false},
  ];
  
  $scope.getDataGender = function(){
    MasterDataService.getDataGender().then(
      function(result){
        $scope.dataGender = result;
      }, 
      function(error){

      }
    );
  };

  $scope.getDataGender();

  $scope.getDataReligion = function(){
    MasterDataService.getDataReligion().then(
      function(result){
        $scope.dataReligion = result;
      }, 
      function(error){

      }
    );
  };

  $scope.getDataReligion();

  $scope.getDataProvince = function(){
    MasterDataService.getDataProvince().then(
      function(result){
        $scope.dataProvince = result;
      }, 
      function(error){

      }
    );
  };

  $scope.getDataProvince();

  $scope.getFastStartType = function(){
	  CandidatePackService.getFastStartType().then(
		  function(result){
			  $scope.fastStartType = result;
		  }, 
		  function(error){
			  console.log(error);
		  }
	  )
  }
  
  $scope.getFastStartType();
  
  $scope.getFastStartSchedule = function(){
	  CandidatePackService.getfastStartSchedule().then(
		  function(result){
			  $scope.fastStartSchedule = result;
		  }, 
		  function(error){
			  console.log(error);
		  }
	  )
  }    
  
  $scope.getFastStartLocation = function(){	    
	  CandidatePackService.getFastStartLocation().then(
		  function(result){			  
			  $scope.fastStartLocation = result;
			  //delete $scope.candidatePack.dataFastStart.trainingLocation;
		  }, 
		  function(error){
			  console.log(error);
		  }
	  )
  }
  
  $scope.getFastStartLocation();

  $scope.changeFastStartType = function(){
    if($scope.candidatePack.dataFastStart.trainingType != 1){
      delete $scope.candidatePack.dataFastStart.trainingLocation;
      delete $scope.candidatePack.dataFastStart.choosedTrainingId;
    }

    $scope.save();
  }

  $scope.getDataCandidatePack = function(){
	  console.log("get data candidate");
	  CandidatePackService.getDataCandidatePack($scope.dataCandidateParam).then(
		function(result){
			console.log(result);
			if(result !== 'empty'){
				$scope.candidatePack = result.json;
				
				if($scope.candidatePack.dataKeluarga.wifeBirthOfDate !== undefined){
					$scope.candidatePack.dataKeluarga.wifeBirthOfDate = new Date($scope.candidatePack.dataKeluarga.wifeBirthOfDate);
				}
				
        console.log("TEst Ponsel");
        console.log($scope.candidatePack.dataPribadi);
        if($scope.candidatePack.dataPribadi.cellPhone !== undefined){
          if($scope.candidatePack.dataPribadi.cellPhone.length <= 1){
            $scope.pribadiCelularPhones = [{id: '1', modelName: 'celular_phone_1'}];
          } else {
            console.log("Start looping Ponsel");
            var i = 1;
            $scope.pribadiCelularPhones = [];
            for(item in $scope.candidatePack.dataPribadi.cellPhone){
              console.log("initiate Ponsel " + i);
               $scope.pribadiCelularPhones.push({id: i, modelName: 'celular_phone_' + i})
               console.log($scope.pribadiCelularPhones);
               i++;
            }
          }
        } else {
          $scope.pribadiCelularPhones = [{id: '1', modelName: 'celular_phone_1'}];
        }
        
				
				
				/*if($scope.candidatePack.dataUjian.choosedTestId !== undefined){
					$scope["choosingAaji"+$scope.candidatePack.dataUjian.choosedTestId] = true
				}
				
				if($scope.candidatePack.dataFastStart.trainingType !== undefined){
					$scope.getFastStartLocation();
				}*/
				
      
        CandidatePackService.getfastStartSchedule().then(
          function(result){
            $scope.fastStartSchedule = result;
            
            if($scope.candidatePack.dataFastStart.choosedTrainingId !== undefined){
              for(var i = 0; i < $scope.fastStartSchedule.length; i++){
                var schId = $scope.fastStartSchedule[i].id;
                $scope["choosing"+schId] = false;
              }
              $scope["choosing"+$scope.candidatePack.dataFastStart.choosedTrainingId] = true;      
            }
          }, 
          function(error){
            console.log(error);
          }
        );

        CandidatePackService.getTestSchedule().then(
          function(result){
            $scope.aajiSchedule = result;

            //$scope.candidatePack.dataUjian.choosedTestId;

            if($scope.candidatePack.dataUjian.choosedTestId !== undefined){
              var choosedSch = document.getElementsByClassName("choosed").length;
              if (choosedSch <= 0){
                $scope["choosingAaji"+$scope.candidatePack.dataUjian.choosedTestId] = true;
              }else{               
                $scope["choosingAaji"+id] = false;
                delete $scope.candidatePack.dataUjian.choosedTestId;  
              }
            }
          },
          function(error){
            console.log(error);
          }
        );
				
				
			} else {
        $scope.pribadiCelularPhones = [{id: '1', modelName: 'celular_phone_1'}];

				$scope.candidatePack.dataPribadi = {};
				$scope.candidatePack.dataRekening = {};
				$scope.candidatePack.dataPajak = {};
				$scope.candidatePack.dataKeluarga = {};
				$scope.candidatePack.dataKeagenan = {};
				$scope.candidatePack.dataJejaring = {};
				$scope.candidatePack.dataDokumen = {};
				$scope.candidatePack.dataFastStart = {};
				$scope.candidatePack.dataUjian = {};

        console.log($scope.candidatePack);
			}
		},
		function(error){
			console.log(error);
		}
	  );
  }

  
  
  $scope.getDataCandidatePack();

  $scope.landscapeImage = null;
  $scope.landscapeImageRotation = 0;
  $scope.landscapeOutputImage = null;
  $scope.potraitImage = null;
  $scope.potraitImageRotation = 0;
  $scope.potraitOutputImage = null;

  $scope.pribadi = {
    ktpImage: null,
    profileImage: null
  }

  $scope.rekening = {
    foto: null
  }

  $scope.pajak = {
    npwp: null
  }

  $scope.dataSchedule = [{kota:"Jakarta"},{kota:"Bandung"},{kota:"Bogor"}]

  $scope.accordionInit = function(){
    var accordions = $(".list-info-accordion");

    $.each(accordions, function( index, value ) {
      var accordionBody = $(value).find(".accordion-body");

      if(!$(value).hasClass("collapsed")){
        accordionBody.attr("style", "margin-top: -" + accordionBody.height()  + "px;")
      }
    });
  }

  $scope.collapseAccordion = function(e){
    var self = $(e.toElement);
    var accordion = self.parents(".list-info-accordion");
    var accordionBody = accordion.find(".accordion-body");

    if(accordion.hasClass("collapsed")){
      accordion.removeClass("collapsed");
      accordionBody.attr("style", "margin-top: -" + accordionBody.height() + "px;");
    }else{
      accordion.addClass("collapsed");
      accordionBody.css("margin-top", 0);
    }
  }

  $scope.menuTabs = [
	 {id:1, name: "Pribadi",  url: "components/candidate_pack/pribadi.html"},
	 {id:2, name: "Rekening", url: "components/candidate_pack/rekening.html"},
	 {id:3, name: "Pajak",    url: "components/candidate_pack/pajak.html"},
	 {id:4, name: "Keluarga", url: "components/candidate_pack/keluarga.html"},
	 {id:5, name: "Keagenan", url: "components/candidate_pack/keagenan.html"},
	 {id:6, name: "Jejaring Social", url: "components/candidate_pack/jejaring_social.html"},
	 {id:7, name: "Dokumen", url: "components/candidate_pack/dokumen.html"},
	 {id:8, name: "<strong>PRU</strong><em>fast start</em>", url: "components/candidate_pack/prufast-start.html"},
	 {id:9, name: "Ujian AAJI", url: "components/candidate_pack/ujian-aaji.html"}
 ]

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

  $ionicModal.fromTemplateUrl('components/modal/landscape-photo.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.landscapePhotoModal = modal;
  });
  $scope.openLandscapeModal = function(img, uploadTo) {
	  console.log($scope);
    $scope.landscapeImage = img;
    $scope.landscapePhotoModal.show();
    $(".landscape-upload-modal .button.button-header-clear").attr("data-upload-model", uploadTo);
  };
  $scope.closeLandscapeModal = function() {
    $scope.landscapePhotoModal.hide();
  };

  $ionicModal.fromTemplateUrl('components/modal/potrait-photo.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.potraitPhotoModal = modal;
  });
  $scope.openPotraitModal = function(img, uploadTo) {
    $scope.potraitImage = img;
    $scope.potraitPhotoModal.show();
    $(".potrait-upload-modal .button.button-header-clear").attr("data-upload-model", uploadTo);
  };
  $scope.closePotraitModal = function() {
    $scope.potraitPhotoModal.hide();
  };

  $scope.rotateImagePotrait = function(){
    $scope.potraitImageRotation+=90;
  }
  
  $scope.rotateImageLandscape = function(){
    $scope.landscapeImageRotation+=90;
  }
  
  $scope.useLandspacePhoto = function(e){
    var initSourceInput = $(e.toElement).attr("data-upload-model").split(".");
    var imageResult = $("#landspaceResult").attr("src");
    $scope[initSourceInput[0]][initSourceInput[1]][initSourceInput[2]] = imageResult;
    $scope.save();
    $scope.closeLandscapeModal();
  }

  $scope.usePotraitPhoto = function(e){
    var initSourceInput = $(e.toElement).attr("data-upload-model").split(".");
    var imageResult = $("#potraitResult").attr("src");
    $scope[initSourceInput[0]][initSourceInput[1]][initSourceInput[2]] = imageResult;
    $scope.save();
    $scope.closePotraitModal();
  }

 
  //var choosingVar = "choosing"+$scope.fastStartSchedule[0].id;
  //$scope[choosingVar] = true;
  $scope.fastStart = false;
  $scope.chooseSchedule = function(e, id) {
    for(var i = 0; i < $scope.fastStartSchedule.length; i++){
      var schId = $scope.fastStartSchedule[i].id;
      if (schId != id){
        $scope["choosing"+schId] = false;
      }
    }
    
    if($scope["choosing"+id] !== undefined){
    	if($scope["choosing"+id] === true){
    		$scope["choosing"+id] = false;      
    	    delete $scope.candidatePack.dataFastStart.choosedTrainingId;
    	} else {
    		$scope["choosing"+id] = true;      
    	    $scope.candidatePack.dataFastStart.choosedTrainingId = id;
    	}
    } else {
    	$scope["choosing"+id] = true;      
        $scope.candidatePack.dataFastStart.choosedTrainingId = id;
    }    
    
    $scope.save();
  }

  /*$scope.aajiSchedule =  [
  {
    date: "Rabu, 18 September 2016",
    sch : [{id:1, number:"01", time:"09:00 - 10:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"},
    {id:2, number:"02", time:"13:00 - 14:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"}]
  },
  {
    date: "kamis, 19 September 2016",
    sch : [{id:3, number:"01", time:"09:00 - 10:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"},
    {id:4, number:"02", time:"13:00 - 14:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"}]
  },
  {
    date: "Jumat, 20 September 2016",
    sch : [{id:5, number:"01", time:"09:00 - 10:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"},
    {id:6, number:"02", time:"13:00 - 14:45", loc: "PRUDENTIAL CENTER", endReg: "20 Agustus 2016"}]
  }
  ];*/

  //var choosingAajiVar = "choosing"+$scope.aajiSchedule[0].sch[0].id;
  //$scope[choosingAajiVar] = true;
  $scope.chooseAajiSchedule = function(e, id) {
    var choosedSch = document.getElementsByClassName("choosed").length;
    if (choosedSch <= 0){
      $scope["choosingAaji"+id] = true;
      $scope.candidatePack.dataUjian.choosedTestId = id; 
      $scope.save();
    }else{
      if (!$scope["choosingAaji"+id]){
        $scope.showConfirm(id); 
      }else{
        $scope["choosingAaji"+id] = false;
        delete $scope.candidatePack.dataUjian.choosedTestId;
        $scope.save();
      }  
    }    
  }

  $scope.showConfirm = function(id) {
    var confirmPopup = $ionicPopup.confirm({
      title: "<strong>PRU</strong><em>force</em>",
      template: 'Apakah anda ingin mengubah jadwal?',
      cssClass: 'pru-alert uppercase pru-logo-text',

      buttons: [{
        text: 'Tidak',
        type: 'button-assertive',

        onTap: function(e) {}
      },
      {
       text: 'Ya',
       type: 'button-assertive',
       onTap: function() {
        for(var i = 0; i < $scope.aajiSchedule.length; i++){
          for(var j = 0; j < $scope.aajiSchedule[i].sch.length; j ++){
            var schId = $scope.aajiSchedule[i].sch[j].id;
            if (schId != id){
              $scope["choosingAaji"+schId] = false;
            }
          }
        }
        $scope["choosingAaji"+id] = true;
        $scope.candidatePack.dataUjian.choosedTestId = id;
        $scope.save();
        }
      }]
    });
  };

  $scope.showSimpleToast = function(msgText) {
     $mdToast.show(
       $mdToast.simple()
       .textContent(msgText)
       .position('bottom right')
       .hideDelay(3000)
	
     );
   };

   $scope.save = function(){
      $scope.candidatePack.agentId = $scope.dataCandidateParam.agentId;
      $scope.candidatePack.npa = $scope.dataCandidateParam.npa;
      
      CandidatePackService.saveDataCandidate($scope.candidatePack).then(
          function(result){
            console.log($scope.candidatePack);
          },
          function(error){
            
          }
      );
   }
   
   
   
   $scope.sendData = function(e, currentMenuTab){    
    e.preventDefault();
    
    if(currentMenuTab.id < $scope.menuTabs.length){
    	var nextMenuTab = $filter('filter')($scope.menuTabs, {id: currentMenuTab.id + 1})[0];
    	$scope.movingTab(e, nextMenuTab);
    }
  }

   $scope.addNewCelularPhone = function(){
     if($scope.pribadiCelularPhones.length <= 9){
       var newCelular = $scope.pribadiCelularPhones.length+1;
       $scope.pribadiCelularPhones.push({'id': newCelular, modelName: 'celular_phone_'+newCelular});
	
     }else{
       $scope.showSimpleToast('Telepon Selular Maksimal 10')
     }
   }

  angular.element(document).ready(function() {
    init();
  });
});

