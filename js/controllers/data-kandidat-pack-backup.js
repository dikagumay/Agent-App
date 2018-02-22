var pruforce = angular.module('PruForce');

pruforce.controller('dataCandidatePackCtrl', function($scope, $ionicScrollDelegate, $ionicPopup) {
  function init() {
    for (var i = 0; i < $(".tab-item").length; i++) {
      $($(".tab-item")[i]).attr("data-position-left", ($($(".tab-item")[i]).position().left - 20));
    }

    $scope.pribadi = {}
    $scope.pajak = {}
  }

  $scope.dataSchedule = [{kota:"Jakarta"},{kota:"Bandung"},{kota:"Bogor"}]

  $scope.resampledPasfoto = function(data){
    temporaryUploaderParent.find(".tmp_photo").attr('src',data);
  }

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
    {name: "Pribadi",  url: "templates/candidate_pack/pribadi.html"},
    {name: "Rekening", url: "templates/candidate_pack/rekening.html"},
    {name: "Pajak",    url: "templates/candidate_pack/pajak.html"},
    {name: "Keluarga", url: "templates/candidate_pack/keluarga.html"},
    {name: "Keagenan", url: "templates/candidate_pack/keagenan.html"},
    {name: "Jejaring Social", url: "templates/candidate_pack/jejaring_social.html"},
    {name: "Dokumen", url: "templates/candidate_pack/dokumen.html"},
    {name: "<strong>PRU</strong><em>fast start</em>", url: "templates/candidate_pack/prufast-start.html"},
    {name: "Ujian AAJI", url: "templates/candidate_pack/ujian-aaji.html"}
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

  $scope.loadFormRequirements = function(){
    var $imageLandscape = $(".landscape-photo-container > img");
    var $imagePotrait = $(".potrait-photo-container > img");
    var cropBoxData = null;
    var canvasData = null;
    var cropBoxDataPotrait = null;
    var canvasDataPotrait = null;
    var imgCropKtp = null;
    var exportClikLandscape = false;
    var exportClikPotrait = false;
    var temporaryUploaderParent = null;

    // setTimeout(function(){
    //   var formMaterial = $('form.material');

    //   for (var i = 0; i < formMaterial.length; i++) {
    //     if(!$($('form.material')[i]).hasClass("materialized")){
    //       $($('form.material')[i]).materialForm();
    //     }
    //   }
    // }, 100);

    $('.tmp_photo').on('load', function () {
      imgObj = new Image();
      imgObj.src = $(this).attr("src");
      var photoType = $(this).parents(".image-editor").attr("data-photo-type");
      var photoIdentity = $(this).parents(".image-editor").attr("class").split(" ")[2];

      $('.load-spinner').addClass('show');
      imgObj.onload = function () {
        $('.img-container.' + photoType + '-photo-container > img').attr('src',imgObj.src).css('max-width','100%');          
      }
      setTimeout(function(){
        $('.' + photoType + '-photo-modal').attr("photo-identity", photoIdentity).modal('show');
      }, 100);
    });

    $('.landscape-photo-modal').on('shown.bs.modal', function () {
      exportClikKtp = false;

      $('.load-spinner').removeClass('show');
      $imageLandscape.cropper({
        autoCropArea: 0.9,
        aspectRatio: 420 / 264,
        strict: false,
        guides: false,
        highlight: false,
        dragCrop: false,           
        cropBoxMovable: false,
        cropBoxResizable: false,
        built: function () {
          $imageLandscape.cropper('setCropBoxData', cropBoxData);
          $imageLandscape.cropper('setCanvasData', canvasData);
        }
      });
    }).on('hidden.bs.modal', function () {
      cropBoxData = $imageLandscape.cropper('getCropBoxData');
      canvasData = $imageLandscape.cropper('getCanvasData');
      $imageLandscape.cropper('destroy');
    }).on('hide.bs.modal', function () {
      var imageDataCanvas = $imageLandscape.cropper('getCroppedCanvas');
      var imageData = imageDataCanvas.toDataURL('image/png');
      var getPhotoIdentity = $(this).attr("photo-identity");
      var photoIdentityImageHolder = $("." + getPhotoIdentity).find(".image-holder")
      imgCrop = "<img src='"+imageData+"' />";

      if(exportClikLandscape){
        photoIdentityImageHolder.find("img").remove();
        photoIdentityImageHolder.find("i").remove();
        photoIdentityImageHolder.append(imgCrop);
      }

      $(this).removeAttr("photo-identity");
    });

    $('.landscape-photo-modal .actions').on('click', '[data-method]', function () {
      var $this = $(this);
      var data = $this.data();
      var $target;
      var result;

      if ($this.prop('disabled') || $this.hasClass('disabled')) {
        return;
      }

      if ($imageLandscape.data('cropper') && data.method) {
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
        result = $imageLandscape.cropper(data.method, data.option, data.secondOption);
        console.log(result.toDataURL);
      }
    });

    $('.export-landscape-photo').on("click", function() {
      exportClikLandscape = true;
    });

    $('.potrait-photo-modal').on('shown.bs.modal', function () {
      exportClikPasFoto = false;

      $('.load-spinner').removeClass('show');
      $imagePotrait.cropper({
        autoCropArea: 0.9,
        aspectRatio: 225 / 291,
        strict: false,
        guides: false,
        highlight: false,
        dragCrop: false,           
        cropBoxMovable: false,
        cropBoxResizable: false,
        built: function () {
          $imagePotrait.cropper('setCropBoxData', cropBoxDataPotrait);
          $imagePotrait.cropper('setCanvasData', canvasDataPotrait);
        }
      });
    }).on('hidden.bs.modal', function () {
      cropBoxDataPotrait = $imagePotrait.cropper('getCropBoxData');
      canvasDataPotrait = $imagePotrait.cropper('getCanvasData');
      $imagePotrait.cropper('destroy');
    }).on('hide.bs.modal', function () {
      var imageDataCanvas = $imagePotrait.cropper('getCroppedCanvas');
      var imageData = imageDataCanvas.toDataURL('image/png');
      var getPhotoIdentity = $(this).attr("photo-identity");
      var photoIdentityImageHolder = $("." + getPhotoIdentity).find(".image-holder")
      imgCrop = "<img src='"+imageData+"' />";

      if(exportClikLandscape){
        photoIdentityImageHolder.find("img").remove();
        photoIdentityImageHolder.find("i").remove();
        photoIdentityImageHolder.append(imgCrop);
      }

      $(this).removeAttr("photo-identity");
    });

    $('.potrait-photo-modal .actions').on('click', '[data-method]', function () {
      var $this = $(this);
      var data = $this.data();
      var $target;
      var result;

      if ($this.prop('disabled') || $this.hasClass('disabled')) {
        return;
      }

      if ($imagePotrait.data('cropper') && data.method) {
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
          result = $imagePotrait.cropper(data.method, data.option, data.secondOption);
          console.log(result.toDataURL);
        }
      });

    $('.export-potrait-photo').on("click", function() {
      exportClikPotrait = true;
    });

        $('.schedule-box').click(function(){
      if($(this).is(".choosed")){
        $('.schedule-box').removeClass('choosed');
      }else{
        var self = $(this);
        var choosedItemCount = $('.accordion').find('.choosed').length;
        // $('.schedule-box').removeClass('choosed');
        // $(this).addClass('choosed');
        function selectSchedule(){
          $('.schedule-box').removeClass('choosed');
          self.addClass('choosed');
          $('.schedule-box').find('.sch-chk').removeAttr('checked');
          self.find('.sch-chk').prop('checked', true); 
        }
        $scope.showConfirm = function() {
          var confirmPopup = $ionicPopup.confirm({
            title: "<strong>PRU</strong><em>force</em>",
            template: 'Apakah anda ingin mengubah jadwal?',
            cssClass: 'pru-alert uppercase pru-logo-text',

            buttons: [
            {
              text: 'Tidak',
              type: 'button-assertive',
              onTap: function(e) {}
            },
            {
              text: 'Ya',
              type: 'button-assertive',
              onTap: function(e) {selectSchedule();}
            }
            ]
          });
        };

        if (choosedItemCount > 0){
          $scope.showConfirm();
        }else{
          selectSchedule();
        }
      }
    });

    $('.loc').change(function(){
      var selectLoc = $(this).find('label span').text();
      var arrayKota = ($scope.dataSchedule);
      if (selectLoc == 'Bandung'){
        $('.sch-container').fadeIn();
        $scope.accordionInit();
      }else{
        $('.sch-container').hide();
      }
    });

    setTimeout(function(){
      $(".bind-select .material-select").on("click", "ul>li", function(){
        var dataModel = $(this).parents(".bind-select").attr("data-model");
        var section = dataModel.split(".")[0];
        var model = dataModel.split(".")[1];
        $scope[section][model] = $(this).find("label").text();
      })
    }, 200); // waiting form material to initialize
  };

  $scope.sendData = function(e){
    e.preventDefault();
    console.log($scope.pribadi.city)
  }

  $scope.addPhone = function(){
    $($(".phone-container").find(".form-group.hidden")[0]).removeClass("hidden");
  }

  angular.element(document).ready(function() {
    init();
    $scope.accordionInit();
  });
})
.directive('potraitPhotoUploader', [
  function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attributes, controller) {
        element.bind("change", function(changeEvent) {
          var parentClass = element.attr("data-parent-image-editor")
          temporaryUploaderParent = $("." + parentClass);

          scope.$apply(function() {
            var photofile = element[0].files[0];
            var reader = new FileReader();

            reader.onload = function(e) {
              imgObj = new Image();
              imgObj.src = event.target.result; 

              if(imgObj.width > imgObj.height){
                Resample(event.target.result,300,null,scope.resampledPasfoto);
              }else{
                Resample(event.target.result,null,400,scope.resampledPasfoto);
              }
            };

            reader.readAsDataURL(photofile);
          });
        });
      }
    };
  }
  ])
.directive('landscapePhotoUploader', [
  function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attributes, controller) {
        element.bind("change", function(changeEvent) {
          var parentClass = element.attr("data-parent-image-editor")
          temporaryUploaderParent = $("." + parentClass);

          scope.$apply(function() {
            var photofile = element[0].files[0];
            var reader = new FileReader();

            reader.onload = function(e) {
              imgObj = new Image();
              imgObj.src = event.target.result; 

              if(imgObj.width > imgObj.height){
                Resample(event.target.result,640,null,scope.resampledPasfoto);
              }else{
                Resample(event.target.result,null,400,scope.resampledPasfoto);
              }
            };

            reader.readAsDataURL(photofile);
          });
        });
      }
    };
  }
  ])

