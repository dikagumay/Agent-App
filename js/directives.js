angular.module('PruForce.directives', [])

.directive("homeWidget", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            //On click
            $(elem).click(function() {
                var widgetElement = $(elem).parent().parent().find('.widget-content');
                var widgetHeight = widgetElement.height()+20;
                var top = '-'+widgetHeight+'px';

                if (widgetElement.hasClass('collapse')){
                  widgetElement.css('margin-top', 0);
                  $(elem).addClass('ion-minus-round');
                  $(elem).removeClass('ion-plus-round');

                  console.log("Corry1");
                  //$('.custom-toggle').click(function(){
                  //$(elem).children("i").toggleClass("ion-plus-round ion-minus-round");
                 // });
                  widgetElement.removeClass('collapse');
                }else{
                  widgetElement.css('margin-top', top);
                  console.log("Corry2");
                  //$(elem).removeClass('ion-chevron-up');
                  //$(elem).addClass('ion-chevron-down');
                  $(elem).addClass('ion-plus-round');
                  $(elem).removeClass('ion-minus-round');
                  widgetElement.addClass('collapse');
                }
            });

            //On interval
        }
    }
}])

.directive("triggerMenu", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            //On click
            $(elem).click(function() {
                $('.left-drawer').toggleClass('active');
                $('.blackdrop').toggleClass('active');
                console.log('active');
            });
            $('.blackdrop').click(function(){
                $('.left-drawer').toggleClass('active');
                $('.blackdrop').toggleClass('active');
            });

            //On interval
        }
    }
}])

.directive("phFilter", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            
            $(elem).on('change',function() {
               if($(elem).val() != 0) {
                var lapsedCount = 0;
                $('.ph-item').hide();
                $('.small.icon').hide();
                $('.spaced-white-box').hide();
                $('.ph-item').each(function(){
                  if($(this).attr('lapsed-data') == 1){
                    $(this).show();
                    $(this).siblings('.small.icon').show();
                    $(this).parent('.spaced-white-box').show();
                    lapsedCount++;
                  }
                });
              }else{
                $('.ph-item').show();
                $('.small.icon').show();
                $('.spaced-white-box').show();
              }
            });
        }
    }
}])

.directive("phSort", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            
            // $(elem).on('change',function() {
            //    var $divs = $("div.ph-item");
            //     $('nav.urutkan .nilaiPremi').on('click', function () {
            //         if($(this).find('i').hasClass('fa-chevron-down')){
            //             var urutkanListPremiDivs = $divs.sort(function (a, b) {
            //                 return parseInt($(a).attr('total-premi')) < parseInt($(b).attr('total-premi'));
            //             });
            //             $(this).find('i').removeClass('fa-chevron-down');
            //             $(this).find('i').addClass('fa-chevron-up');
            //         }
            //         $(".list-polis").html(urutkanListPremiDivs);
            //         buttonBandingkan();
            //     });
            // });
        }
    }
}])

.directive("gpFilter", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            
            $(elem).on('change',function() {
              $('.bordered-text-section').show();
              var filterVal = $(elem).val();
              if (filterVal != '0'){
                $('.bordered-text-section').filter(function(){
                  return $( "."+filterVal, this ).length <= 0
                }).hide();
              }else{
                $('.bordered-text-section').show();
              }
            });
        }
    }
}])

.directive("apeNetSort", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            
        $(elem).on('change',function() {
               var $divs = $("div.bordered-text-section");
                    if($(elem).val() == "ape-net"){
                        var urutkanListPremiDivs = $divs.sort(function (a, b) {
                            return parseInt($(a).attr('ape-net')) < parseInt($(b).attr('ape-net'));
                        });
                    }else if($(elem).val() == "0"){
                        var urutkanListPremiDivs = $divs.sort(function (a, b) {
                            return parseInt($(a).attr('rank-item')) > parseInt($(b).attr('rank-item'));
                        });
                    }
                    $(".spaced-white-box").html(urutkanListPremiDivs);
            });
        }
    }
}])

.directive("sortable", ['$ionicGesture', '$ionicScrollDelegate', function ($ionicGesture, $ionicScrollDelegate) {
    return {
        restrict: 'A',
        scope: {
            draggable: '@',
            sorted: '&'
        },
        link: function (scope, element, attrs) {

            var settings = {
                draggable: scope.draggable ? scope.draggable : '.card',
                duration: 200
            };

            var dragging = null, placeholder = null, offsetY = 0, marginTop = 0;
            var cardSet, initialIndex, currentIndex, animating = false;

            var placeholderHeight;
            var scrollInterval;

            var createPlaceholder = function createPlaceholder(height) {
                // Use marginTop to compensate for extra margin when animating the placeholder
                return $('<div></div>')
                        .css({
                            height: height + 'px',
                            marginTop: (currentIndex > 0 ? -marginTop : -1) + 'px'
                        })
                        .addClass('placeholder');
            };

            var touchHold = function touchHold(e) {
                // Get the element we're about to start dragging
                dragging = angular.element(e.target).closest(settings.draggable);
                if (!dragging.length) dragging = null;

                if (dragging) {
                    // Get the initial index
                    initialIndex = currentIndex = dragging.index(settings.draggable);

                    var position = dragging.position();

                    // Get relative position of touch
                    var clientY = e.gesture.touches[0].clientY;
                    offsetY = clientY - position.top - element.offset().top;

                    // Switch to Absolute position at same location
                    dragging.css({
                        position: 'absolute',
                        zIndex: 1000,
                        left: position.left + 'px',
                        top: position.top + 'px',
                        width: dragging.outerWidth() + 'px'
                    })
                    .addClass('dragging');

                    // Get the set of cards that were re-ordering with
                    cardSet = element.find(settings.draggable + ':not(.dragging)');

                    // We need to know the margin size so we can compensate for having two
                    // margins where we previously had one (due to the placeholder being there)
                    marginTop = parseInt(dragging.css('marginTop')) + 1;

                    // Replace with placeholder (add the margin for when placeholder is full size)
                    placeholderHeight = dragging.outerHeight() + marginTop + 10;
                    placeholder = createPlaceholder(placeholderHeight);
                    placeholder.insertAfter(dragging);

                    // Interval to handle auto-scrolling window when at top or bottom
                    initAutoScroll();
                    scrollInterval = setInterval(autoScroll, 20);
                }
            };
            var holdGesture = $ionicGesture.on('hold', touchHold, element);

            var touchMove = function touchMove(e) {
                if (dragging) {
                    e.stopPropagation();
                    touchY = e.touches ? e.touches[0].clientY : e.clientY;
                    var newTop = touchY - offsetY - element.offset().top;

                    // Reposition the dragged element
                    dragging.css('top', newTop + 'px');

                    // Check for position in the list
                    var newIndex = 0;
                    cardSet.each(function (i) {
                        if (newTop > $(this).position().top) {
                            newIndex = i + 1;
                        }
                    });

                    if (!animating && newIndex !== currentIndex) {
                        currentIndex = newIndex;

                        var oldPlaceholder = placeholder;
                        // Animate in a new placeholder
                        placeholder = createPlaceholder(1);

                        // Put it in the right place
                        if (newIndex < cardSet.length) {
                            placeholder.insertBefore(cardSet.eq(newIndex));
                        } else {
                            placeholder.insertAfter(cardSet.eq(cardSet.length - 1));
                        }

                        // Animate the new placeholder to full height
                        animating = true;
                        setTimeout(function () {
                            placeholder.css('height', placeholderHeight + 'px');
                            // Animate out the old placeholder
                            oldPlaceholder.css('height', 1);

                            setTimeout(function () {
                                oldPlaceholder.remove();
                                animating = false;
                            }, settings.duration);
                        }, 50);
                    }
                }
            };

            var touchMoveGesture = $ionicGesture.on('touchmove', touchMove, element);
            var mouseMoveGesture = $ionicGesture.on('mousemove', touchMove, element);

            var touchRelease = function touchRelease(e) {
                if (dragging) {
                    // Set element back to normal
                    dragging.css({
                        position: '',
                        zIndex: '',
                        left: '',
                        top: '',
                        width: ''
                    }).removeClass('dragging');

                    // Remove placeholder
                    placeholder.remove();
                    placeholder = null;

                    if (initialIndex !== currentIndex && scope.sorted) {
                        // Call the callback with the instruction to re-order
                        scope.$fromIndex = initialIndex;
                        scope.$toIndex = currentIndex;
                        scope.$apply(scope.sorted);
                    }
                    dragging = null;

                    clearInterval(scrollInterval);
                }
            };
            var releaseGesture = $ionicGesture.on('release', touchRelease, element);

            scope.$on('$destroy', function () {
                $ionicGesture.off(holdGesture, 'hold', touchHold);
                $ionicGesture.off(touchMoveGesture, 'touchmove', touchMove);
                $ionicGesture.off(mouseMoveGesture, 'mousemove', touchMove);
                $ionicGesture.off(releaseGesture, 'release', touchRelease);
            });

            var touchY, scrollHeight, containerTop, maxScroll;
            var scrollBorder = 80, scrollSpeed = 0.2;
            // Setup the autoscroll based on the current scroll window size
            var initAutoScroll = function initAutoScroll() {
                touchY = -1;
                var scrollArea = element.closest('.scroll');
                var container = scrollArea.parent();
                scrollHeight = container.height();
                containerTop = container.position().top;
                maxScroll = scrollArea.height() - scrollHeight;
            };

            // Autoscroll function to scroll window up and down when
            // the touch point is close to the top or bottom
            var autoScroll = function autoScroll() {
                var scrollChange = 0;
                if (touchY >= 0 && touchY < containerTop + scrollBorder) {
                    // Should scroll up
                    scrollChange = touchY - (containerTop + scrollBorder);
                } else if (touchY >= 0 && touchY > scrollHeight - scrollBorder) {
                    // Should scroll down
                    scrollChange = touchY - (scrollHeight - scrollBorder);
                }

                if (scrollChange !== 0) {
                    // get the updated scroll position
                    var newScroll = $ionicScrollDelegate.getScrollPosition().top + scrollSpeed * scrollChange;
                    // Apply scroll limits
                    if (newScroll < 0)
                        newScroll = 0;
                    else if (newScroll > maxScroll)
                        newScroll = maxScroll;

                    // Set the scroll position
                    $ionicScrollDelegate.scrollTo(0, newScroll, false);
                }
            };

        }
    }
}])

.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
})
/*.directive('ngChange', function() {    
    return {
        restrict: 'A',
        scope:{'ngChange':'=' },
        link: function(scope, elm, attrs) {
            scope.$watch('ngChange', function(nVal) { elm.val(nVal); });            
            elm.bind('blur', function() {
                var currentValue = elm.val();
                if( scope.ngChange !== currentValue ) {
                    scope.$apply(function() {
                        scope.onChange = currentValue;
                    });
                }
            });
        }
    };        
})*/

.directive('squarePhotoUploader', [function() {
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
				console.log("tes ya men");
				reader.test = function(){
					console.log("tes ya men bro"+e);
				};
				reader.onload = function(e) {
					console.log("tes ya men"+e);
						imgObj = new Image();
						imgObj.src = event.target.result;
						if(imgObj.width > imgObj.height){
								Resample(event.target.result,300,null,scope.resampledPasfoto);
						}else{
								Resample(event.target.result,null,300,scope.resampledPasfoto);
						}
				};
				console.log("tes ya men"+reader.test);
				console.log("tes ya men"+reader.onload);
				reader.readAsDataURL(photofile);
						});
					});
					}
				};
		}
])
.directive('scrollDetector', function($window, $ionicScrollDelegate) {
  return {
    restrict : 'A',

    link: function(scope, element, attrs) {
      
      var scrollableElement = element[0].querySelector('.scroll');
      console.log('scrollableElement');
      console.log(scrollableElement);
      element.on('scroll', function() {
        console.log('Scrolled');
        console.log(element.prop( 'offsetTop' ));
        var scrollView = $ionicScrollDelegate.getScrollView(scrollableElement);
        console.log('Scroll view');
        console.log(scrollView);
      });
    }
  };
});

