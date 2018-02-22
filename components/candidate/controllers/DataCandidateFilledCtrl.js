/**
 * 
 */
angular.module('PruForce.controllers')
.controller('DataCandidateFilledCtrl', function($scope, $state, $controller){
	function init() {
	    if($('form.material').length){
	      $('form.material').materialForm();
	    }
	  }

	  $scope.showAllAnswer = function(e){
	    e.preventDefault();
	    var self = $(e.toElement);
	    var formParent = self.parent().find("form.material");

	    if(formParent.hasClass("show-dropdown")){
	      self.removeClass("button-assertive bor-rad-0");
	      self.text("Tampilkan semua pilihan jawaban");
	      formParent.removeClass("show-dropdown");
	      setTimeout(function(){
	        $('.material-select > input').prop('checked', false);  
	      }, 100)
	    }else{
	      self.addClass("button-assertive bor-rad-0")
	      self.html("<i class='ion ion-alert-circled'></i> Tutup semua pilihan jawaban");
	      formParent.addClass("show-dropdown");
	      setTimeout(function(){
	        $('.material-select > input').prop('checked', true);  
	      }, 100)
	    }
	  }

	  angular.element(document).ready(function() {
	    init();
	  });
	  
	  
	  
	  $scope.listUmur = {
				data : [ {
					value : 0,
					name : 'Umur'
				}, 
				   {
					value : 5,
					name : '27- 40 tahun'
				}, {
					id : 4,
					name : '>40'
				}, {
					id : 3,
					name : '<27'
				} ]
	  };
	  
	  $scope.Umur = {
			  Selected : $scope.listUmur.data[0]
	  };
	  
	  $scope.ChangeUmur = function() {
		  console.log("hasil umur selected : "+$scope.Umur.Selected.name);
		  console.log("hasil umur selected : "+$scope.Umur.Selected.value);
		
	  }
	  
	  console.log("hasil umur selected : "+$scope.Umur.Selected.name);
	  console.log("hasil umur selected : "+$scope.Umur.Selected.value);
	  
	  
	  
	  
	  
	  
	// nilai untuk q1 ; wanita = 5; laki2 : 4
	  // nilai untuk q2 ; umur 27-40 = 5;  > 40: 4 ; < 27 : 3;
	  // nilai untuk q3 ; status : kawin = 5; belum kawin : 4 ; janda : 3; 
	  // nilai untuk q4 ; pencari nafkah utama = 5; pencari nafkah kedua/ ketiga : 4; tidak memiliki tanggungan : 3; 
	  // nilai untuk q5 ; jumlah tanggungan >=2 : 5; 1 orang : 2 ; belum punya tanggungan : 0;  
	  // nilai untuk q6 ; sekolah = 5; belum sekolah : 3; bekerja : 1;  belum punya anak : 0 
	  // nilai untuk q7 ; universitas = 5; sma : 4 ;
	  // nilai untuk q8 ; memiliki usaha sendiri = 5; staff pemasaran/ staff penjualan : 4 ; tenaga ahli: 4; ibu rt : 3; pensiunan : 3; belum ada pengalaman : 2;
	  // nilai untuk q9 ; > 5 tahun  = 5; 3-4 tahun : 4; 1- 2 tahun: 3 ; <1 tahun : 2 ; belum pernah kerja : 2; 
	  // nilai untuk q10 ; pemilik perusahaan = 5;  direktur/manajer : 4 ; penyelia / staff : 3 ; belum prnh bekerja / tidak bekerja = 2 ; 
	  // nilai untuk q11 ; > 60 juta/tahun  = 5; 30 juta- 60 juta/ tahun : 4 ; , 36 juta/ tahun : 3; 
	  // nilai untuk q12 ; mobil = 5; motor : 4 ; tidak memiliki kendaraan : 2;
	  // nilai untuk q13 ; memiliki rumah sendiri = 5; milik orang tua/ tidak memiliki rumah : 3 
	  // nilai untuk q14 ; ponsel = 5; tidak : 2; 
	  // nilai untuk q15 ; sangat tinggi = 5; diatas rata2 : 4 ; rata2 = 3; sangat rendah : 2;
	  // nilai untuk q16 ; jumlah teman >100 = 5; 50 -100 : 4 ; 25- 49 = 3 ; 1-24 : 2;
	  // nilai untuk q17 ; getValue ;
	  

	  
})