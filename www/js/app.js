// Ionic Starter App

var app = angular.module('starter', ['ionic', 'ngMessages', 'ion-floating-menu', 'ionic-search-bar', 'ionic.closePopup', 'controllers', 'services', 'starter.directives']);
var services = angular.module('services', []);
var controllers = angular.module('controllers', []);

app
.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      if (ionic.Platform.isAndroid()) {
        StatusBar.backgroundColorByHexString("#ccc");
        //StatusBar.styleDefault();
        //StatusBar.overlaysWebView(true);
      } else {
        StatusBar.styleDefault();
      }
    }
  });

  $rootScope.logado = false; //TROCAR
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {

  $compileProvider.imgSrcSanitizationWhitelist('img/'); // necessario para imagens
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|img):/);
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel):/);

  /* Platform related config */
  $ionicConfigProvider.scrolling.jsScrolling(true);
  $ionicConfigProvider.tabs.style('standard');
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.navBar.positionPrimaryButtons('right');
  $ionicConfigProvider.views.swipeBackEnabled(true);
  //$ionicConfigProvider.backButton.icon();
  $ionicConfigProvider.backButton.text(false);
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.form.toggle('small');
  //$ionicConfigProvider.form.checkbox('');
  $ionicConfigProvider.spinner.icon('spiral');


  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: "templates/tabs-ios.html",
    controller: "MainCtrl"
    /*templateUrl: function() {
        if (ionic.Platform.isAndroid()) {
            return  "templates/tabs-android.html";
        }
        return "templates/tabs-ios.html";
    }*/
  })

  // Each tab has its own nav history stack:

  .state('tab.timeline', {
    url: '/timeline',
    views: {
      'tab-timeline': {
        templateUrl: 'templates/tab-timeline.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.timeline-profile', {
    url: '/timeline/profile',
    views: {
      'tab-timeline': {
        templateUrl: 'templates/user-profile.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.explore', {
      url: '/explore',
      views: {
        'tab-explore': {
          templateUrl: 'templates/tab-explore.html',
          controller: 'MainCtrl'
        }
      }
  })

.state('tab.explore-profile', {
    url: '/explore/profile',
    views: {
      'tab-explore': {
        templateUrl: 'templates/user-profile.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.tag-list', {
    url: '/explore/tag-list/:tagID',
    cacheView: false,
    views: {
      'tab-explore': {
        templateUrl: 'templates/tag-list.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.tag-profile', {
    url: '/explore/tag-list/profile',
    views: {
      'tab-explore': {
        templateUrl: 'templates/user-profile.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.explore-list', {
    url: '/explore/list/:type',
    cacheView: false,
    views: {
      'tab-explore': {
        templateUrl: 'templates/explore-list.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.search', {
    url: '/explore/search',
    cacheView: false,
    views: {
      'tab-explore': {
        templateUrl: 'templates/search.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.search-profile', {
    url: '/search/profile',
    views: {
      'tab-explore': {
        templateUrl: 'templates/user-profile.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.visualization', {
    url: '/visualization',
    views: {
      'tab-visualization': {
        templateUrl: 'templates/tab-visualization.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.visualization-profile', {
    url: '/visualization/profile',
    views: {
      'tab-visualization': {
        templateUrl: 'templates/user-profile.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.step02', {
    url: '/visualization/step02',
    views: {
      'tab-visualization': {
        templateUrl: 'templates/step02.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.step03', {
    url: '/visualization/step03',
    views: {
      'tab-visualization': {
        templateUrl: 'templates/step03.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.notification', {
    url: '/notification',
    views: {
      'tab-notification': {
        templateUrl: 'templates/tab-notification.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.notification-profile', {
    url: '/notification/profile',
    views: {
      'tab-notification': {
        templateUrl: 'templates/user-profile.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.account-profile', {
    url: '/account/profile',
    views: {
      'tab-account': {
        templateUrl: 'templates/user-profile.html',
        controller: 'MainCtrl'
      }
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/explore');

});
