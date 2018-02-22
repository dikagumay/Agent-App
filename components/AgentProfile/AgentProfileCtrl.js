/**
 * 
 */

angular.module('PruForce.controllers')

.controller('AgentProfileCtrl', function($scope, $http, $ionicActionSheet) {
	
	/*function getDataAgentProfileSuccess(result) {
		console.log("Resultnyaa"+result);
	    if (result.invocationResult.isSuccessful){
	    		
	    	$scope.agentNumber = result.invocationResult.agentNumber;
	    	$scope.clientName = result.invocationResult.clientName;
	    	//$scope.salesForceCode = result.invocationResult.salesForceCode;
	    	$scope.clientNumber = result.invocationResult.clientNumber;
	    	$scope.marriageStatus = result.invocationResult.marriageStatus;
			$scope.address = result.invocationResult.address;
			$scope.agentEmailAddress = result.invocationResult.agentEmailAddress;
			$scope.agentType = result.invocationResult.agentType;
				
			$scope.mobilePhone = result.invocationResult.mobilePhone;
			$scope.homePhone = result.invocationResult.homePhone;
			$scope.officePhone = result.invocationResult.officePhone;
				
			$scope.oficeLocation = result.invocationResult.office;
			$scope.unitCode = result.invocationResult.unitCode;
			$scope.unitName = result.invocationResult.unitName;
				
			$scope.licenceExpiryDate = result.invocationResult.licenceExpiryDate;
			$scope.licenceNumber = result.invocationResult.licenceNumber;
				
			$scope.overallSanction = result.invocationResult.overallSanction;
			$scope.currentYearSanction = result.invocationResult.currentYearSanction;
			//$scope.currentYearTrainingSanction = result.invocationResult.currentYearTrainingSanction;
				
			var joinDate = result.invocationResult.joinDate;
			var joinDateConv = new Date(joinDate);
			var joinDates = moment(joinDateConv).format('LL');
			$scope.joinDates = joinDates;
			 	
			var dateBirth = result.invocationResult.dateOfBirth;
			var dateBirthConv = new Date(dateBirth);
			var dateofBirth = moment(dateBirthConv).format('LL');
			$scope.dateofBirth = dateofBirth;
			
			$('#mobile').on('click', function(event){ 
				window.location.href='tel:'+$scope.mobilePhone;
			});
			$('#home').on('click', function(event){ 
				window.location.href='tel:'+$scope.homePhone;
			});
			$('#office').on('click', function(event){ 
				window.location.href='tel:'+$scope.officePhone;
			});
	    	
	    } else {
            AppsLog.log("No data found. Please try again later!");
        }
    }
 
    function getDataAgentProfileFailed(result){
         AppsLog.log("Load Data Failed, Please Check Your Connection");
    }*/
    
    $scope.changePhoto = function() {
        var hideSheet = $ionicActionSheet.show({
          buttons: [
          { text: 'Upload Gambar' },
          { text: 'Ambil Gambar' }
          ],
          cancelText: 'Cancel',
          cancel: function() {
          },
          buttonClicked: function(index) {
            if(index === 0){
              console.log(0)
              $(".agen-change-photo-profile").click();
              hideSheet();
            }else if(index === 1){
              console.log(1)
            }
          }
        });
      };
      
      $scope.resampledPasfoto = function(data){
    	    $(".tmp-main-avatar").attr('src',data);
      }
      
      $scope.loadFormRequirements = function(){
      	  	console.log("haloooooooooo broo22222");
    	    var $imageSquare = $(".square-photo-container > img");
    	    var cropBoxData = null;
    	    var canvasData = null;
    	    var cropBoxDataPotrait = null;
    	    var canvasDataPotrait = null;
    	    var imgCropKtp = null;
    	    var exportClikSquare = false;
    	    var temporaryUploaderParent = null;

    	    $('.tmp-main-avatar').on('load', function () {
    	      imgObj = new Image();
    	      imgObj.src = $(this).attr("src");

    	      $('.load-spinner').addClass('show');
    	      imgObj.onload = function () {
    	        $('.img-container.square-photo-container > img').attr('src',imgObj.src).css('max-width','100%');
    	      }
    	      $('.square-photo-modal').modal('show');
    	    });

    	    $('.square-photo-modal').on('shown.bs.modal', function () {
    	      exportClikPasFoto = false;

    	      $('.load-spinner').removeClass('show');
    	      $imageSquare.cropper({
    	        autoCropArea: 0.9,
    	        aspectRatio: 220 / 220,
    	        strict: false,
    	        guides: false,
    	        highlight: false,
    	        dragCrop: false,
    	        cropBoxMovable: false,
    	        cropBoxResizable: false,
    	        built: function () {
    	          $imageSquare.cropper('setCropBoxData', cropBoxDataPotrait);
    	          $imageSquare.cropper('setCanvasData', canvasDataPotrait);
    	        }
    	      });
    	    }).on('hidden.bs.modal', function () {
    	      cropBoxDataPotrait = $imageSquare.cropper('getCropBoxData');
    	      canvasDataPotrait = $imageSquare.cropper('getCanvasData');
    	      $imageSquare.cropper('destroy');
    	    }).on('hide.bs.modal', function () {
    	      var imageDataCanvas = $imageSquare.cropper('getCroppedCanvas');
    	      var imageData = imageDataCanvas.toDataURL('image/png');
    	      var getPhotoIdentity = $(this).attr("photo-identity");
    	      var photoIdentityImageHolder = $("." + getPhotoIdentity).find(".image-holder")
    	      imgCrop = "<img src='"+imageData+"' />";

    	      if(exportClikSquare){
    	        $(".main-avatar").attr("style", "background-image: url(" + imageData + ")");
    	        photoIdentityImageHolder.append(imgCrop);
    	      }

    	      $(this).removeAttr("photo-identity");
    	    });

    	    $('.square-photo-modal .actions').on('click', '[data-method]', function () {
    	      var $this = $(this);
    	      var data = $this.data();
    	      var $target;
    	      var result;

    	      if ($this.prop('disabled') || $this.hasClass('disabled')) {
    	        return;
    	      }

    	      if ($imageSquare.data('cropper') && data.method) {
    	          data = $.extend({}, data); // Clone a new one
    	          if (typeof data.target !== 'undefined') {
    	            $target = $(data.target);

    	            if (typeof data.option === 'undefined') {
    	              try {
    	                data.option = JSON.parse($target.val());
    	              } catch (e) {
    	                console.log(e.message);
    	              }
    	            }
    	          }
    	          result = $imageSquare.cropper(data.method, data.option, data.secondOption);
    	          console.log(result.toDataURL);
    	        }
    	    });

    	    $('.export-square-photo').on("click", function() {
    	      exportClikSquare = true;
    	    });
    	  };


    	  $(document).ready(function() {
    	    $scope.loadFormRequirements();
      	  console.log("haloooooooooo broo11111");
    	  });
	
})