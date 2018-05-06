// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ionic-search-bar', 'ionic.closePopup', 'controllers', 'services', 'starter.directives']);
var services = angular.module('services', []);
var controllers = angular.module('controllers', []);

app
.run(function($ionicPlatform) {
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
    templateUrl: "templates/tabs-ios.html"
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

  .state('tab.explore', {
      url: '/explore',
      views: {
        'tab-explore': {
          templateUrl: 'templates/tab-explore.html',
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

  .state('tab.visualization', {
    url: '/visualization',
    views: {
      'tab-visualization': {
        templateUrl: 'templates/tab-visualization.html',
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

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'MainCtrl'
      }
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/timeline');

});
