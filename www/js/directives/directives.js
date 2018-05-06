angular.module('starter.directives', ['ionic'])

.directive('headerShrink', function($document) {
  var fadeAmt;

  var shrink = function(header, content, amt, max) {
    amt = Math.min(44, amt);
    fadeAmt = 1 - amt / 44;
    ionic.requestAnimationFrame(function() {
      header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + amt + 'px, 0)';
      for(var i = 0, j = header.children.length; i < j; i++) {
        header.children[i].style.opacity = fadeAmt;
      }
    });
  };

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var starty = orgStarty = $scope.$eval($attr.headerShrink) || 40;
      var shrinkAmt;

      var header = $document[0].body.querySelector('.bar-header');
      var headerHeight = header.offsetHeight;

      $element.bind('scroll', function(e) {
          shrinkAmt = headerHeight - (headerHeight - (e.detail.scrollTop - starty));

          if (shrinkAmt >= headerHeight){
            //header is totaly hidden - start moving startY downward so that when scrolling up the header starts showing
            starty = (e.detail.scrollTop - headerHeight);
            shrinkAmt = headerHeight;
          } else if (shrinkAmt < 0){
            //header is totaly displayed - start moving startY upwards so that when scrolling down the header starts shrinking
            starty = Math.max(orgStarty, e.detail.scrollTop);
            shrinkAmt = 0;
          }

          shrink(header, $element[0], shrinkAmt, headerHeight); //do the shrinking

      });
    }
  }
})

.directive('visualizationCard', function () {
  return {
    restrict: 'E',
    transclude: true,
    controller: 'MainCtrl',
    templateUrl: 'js/directives/templates/visualization_card.html',
    scope: {
        item: "=item"
    }
  };
})

.directive('squareCardList', function () {
  return {
    restrict: 'E',
    transclude: true,
    controller: 'MainCtrl',
    templateUrl: 'js/directives/templates/square_card_list.html',
    scope: {
        list: "=list"
    }
  };
})

.directive('tagSearchList', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/templates/tags_search_list.html',
    scope:{
        list: "=list"
    }
  };
})

.directive('visualizationSearchList', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/templates/visualization_search_list.html',
    scope:{
        list: "=list"
    }
  };
})

.directive('datasetSearchList', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/templates/dataset_search_list.html',
    scope:{
        list: "=list"
    }
  };
})

.directive('userSearchList', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/templates/user_search_list.html',
    scope:{
        list: "=list"
    }
  };
})

.directive('backButton', function () {
  return {
    restrict: 'AE',
    template: '<button class="button button-icon icon ion-android-arrow-back modal-back-icon" style="color: #333 !important"></button>'
  };
})



