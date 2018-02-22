angular.module('PruForce.services')

.service('PhotoUploaderService', function($q){
	
	var PhotoUploader = function(){
		
		var GetFromLibrary = function(){
			
			var data;
			var deferred = $q.defer();
			
			if (navigator.camera) {
				console.log(Camera);
		        var options =   {   
	        		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		            destinationType: Camera.DestinationType.DATA_URL,
		            //sourceType:0,      // 0:Photo Library, 1=Camera, 2=Saved Album
		            encodingType: 0     // 0=JPG 1=PNG
		            
		        };
		        
				navigator.camera.getPicture(
					function(imgData) {
						data =  "data:image/jpeg;base64," + imgData;
						deferred.resolve(data);
					},
					function() {
					    AppsLog.log('Error taking picture', 'Error');
					    deferred.reject('Error taking picture');
					},
				options);
	        } else {
	        
		        var reader = new FileReader();
		        reader.onloadend = function (loadEvent) {
		          scope.$apply(function () {
		        	  data = reader.result;
		        	  deferred.resolve(data);
		            //scope.openLandscapeModal(reader.result, target);
		          });
		        }
		        
		        reader.onerror = function(e){
		        	deferred.reject(e);
		        }
		        
		        
		        reader.readAsDataURL(changeEvent.target.files[0]);
	        
	        }
			
			return deferred.promise;
		};
		
		var TakePictureFromCamera = function(){
			var data;
			var deferred = $q.defer();
			
			if (navigator.camera) {
				var options =   {   
		        		sourceType: Camera.PictureSourceType.CAMERA,
			            destinationType: Camera.DestinationType.DATA_URL,
			            //sourceType:0,      // 0:Photo Library, 1=Camera, 2=Saved Album
			            encodingType: 0     // 0=JPG 1=PNG
			            
			        };
			        
					navigator.camera.getPicture(
						function(imgData) {						
							data = "data:image/jpeg;base64," + imgData;
							deferred.resolve(data);
						},
						function() {
						    AppsLog.log('Error taking picture', 'Error');
						    deferred.reject('Error taking picture');
						},
					options);
			} else {
				deferred.reject("No Camera Found");
			}
			
			return deferred.promise;
		}
		
		
		this.GetFromLibrary = GetFromLibrary;
		this.TakePictureFromCamera = TakePictureFromCamera;
	}
	
	
	var GetFromLibrary = function(){
		var photoUploader = new PhotoUploader();
		return photoUploader.GetFromLibrary();
	}
	
	var TakePictureFromCamera = function(){
		var photoUploader = new PhotoUploader();
		return photoUploader.TakePictureFromCamera();
	}
	
	return {
		GetFromLibrary: GetFromLibrary,
		TakePictureFromCamera: TakePictureFromCamera
	}
	
});