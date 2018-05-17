controllers.controller('MainCtrl', function($scope, $rootScope, $ionicPopup, $state, $stateParams, $ionicModal, $ionicHistory, $ionicTabsDelegate, $ionicPopover, IonicClosePopupService, Tags, Datasets, Visualizations, Notifications, Users, Timeline) {
  $scope.$on('$ionicView.enter', function(e) {
    console.log('enter main controller');

    $scope.search = {};
    $scope.listTitle = '';

    $scope.tags = Tags.all();
    $scope.datasets = Datasets.all();
    $scope.visualizations = Visualizations.all();
    $scope.notifications = Notifications.all();
    $scope.users = Users.all();
    $scope.timeline = Timeline.all();
    $scope.mainUser = $scope.users[0];

    $scope.listType = $stateParams.type;
    $scope.tag = Tags.get($stateParams.tagID);
    $scope.tagVisualizations = Visualizations.getByTag($stateParams.tagID);

    $scope.myDatasets = Datasets.getByUser(0);
    $scope.myVisualizations = Visualizations.getByUser(0);
    $scope.myFollowed = Visualizations.getFollowed();
    $scope.myLiked = Visualizations.getLiked();

    $scope.name = '';
    $scope.description = '';
    $scope.cadastro = true;

    var userID = Users.getID();
    $scope.user = Users.get(userID);
    $scope.userVisualizations = Visualizations.getByUser(userID);
    $scope.userDatasets = Datasets.getByUser(userID);
  });

  $scope.changeLogin = function() {
    $scope.cadastro = !$scope.cadastro;
  }

  $scope.doLogin = function() {
    $rootScope.logado = true;
    $scope.openExplore();
    $scope.closeLogin();
  }

  $scope.getTag = (itemID) => {
    $scope.tag = Tags.get(itemID);
  }

  $scope.refreshAll = function () {
    $scope.tags = Tags.all();
    $scope.datasets = Datasets.all();
    $scope.visualizations = Visualizations.all();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.refreshNotifications = function () {
    $scope.notifications = Notifications.all();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.refreshTimeline = function () {
    $scope.timeline = Timeline.all();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.removeDS = function(id) {
    Datasets.remove(id);
  };

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.openSearch = function(){
    $state.go('tab.search');
  }
  $scope.openStep01 = function(){
    $state.go('tab.visualization');
  }
  $scope.openStep02 = function(){
    $state.go('tab.step02');
  }
  $scope.openStep03 = function(){
    $state.go('tab.step03');
  }
  $scope.openList = function(){
    $state.go('tab.explore-list');
  }

  $scope.openExplore = function(){
    $state.go('tab.explore');
  }

  $scope.openUserProfile = function(itemID){
    let state = $state.current.name.split('-')[0] + '-profile';
    console.log($state.name);
    console.log(state);

    $state.go(state, {  }, { location: false, reload: true });
    Users.setID(itemID);
  }

  $ionicPopover.fromTemplateUrl('templates/popups/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  $scope.showLogin = function() {
    console.log('login porra');
    var loginPopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        title: 'WikiOlap',
        templateUrl: 'templates/popups/login.html'
   })
    IonicClosePopupService.register(loginPopup);

    $scope.closeLogin = function(){
      loginPopup.close();
    };
  }

  $scope.showEixoX = function() {
    var eixoXPopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        title: 'Eixo X',
        templateUrl: 'templates/popups/eixo-x.html'
   })
    IonicClosePopupService.register(eixoXPopup);

    $scope.closeEixoX = function(){
      eixoXPopup.close();
    };
  }

  $scope.showEixoY = function() {
    var eixoYPopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        title: 'Eixo Y',
        templateUrl: 'templates/popups/eixo-y.html'
   })
    IonicClosePopupService.register(eixoYPopup);

    $scope.closeEixoY = function(){
      eixoYPopup.close();
    };
  }

  $scope.showDelete = function() {
    var deletePopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        title: 'Tem certeza que deseja remover este item?',
        templateUrl: 'templates/popups/delete.html'
   })
    IonicClosePopupService.register(deletePopup);

    $scope.closeDelete = function(){
      deletePopup.close();
    };
  }

  $scope.showConcluir = function() {
    var concluirPopup = $ionicPopup.prompt({
        scope: $scope,
        buttons: false,
        title: 'Tem certeza que deseja postar a visualização?',
        templateUrl: 'templates/popups/concluir.html'
   })
    IonicClosePopupService.register(concluirPopup);

    $scope.closeConcluir = function(){
      concluirPopup.close();
    };
  }

  $scope.concluirAlert = function() {
      var alertPopup = $ionicPopup.alert({
         title: 'Sua visualização foi postada com sucesso!'
      });

      alertPopup.then(function(res) {
        $scope.openExplore();
      });
   };

  $ionicModal.fromTemplateUrl('templates/modals/visualization-detail.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal1 = modal;
    });
    $scope.openVisualizationModal = function(itemID) {
      console.log('open modal ' + itemID);
      $scope.tags = Tags.all();
      $scope.visualization = Visualizations.get(itemID);
      $scope.modal1.show();
    };
    $scope.closeVisualizationModal = function() {
      console.log('fechaa');
      $scope.modal1.hide();
    };

    $ionicModal.fromTemplateUrl('templates/modals/dataset-detail.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openDatasetModal = function(itemID, showAdd) {
      $scope.showAdd = showAdd;
      console.log('open modal dataset ' + itemID);
      $scope.dataset = Datasets.get(itemID);
      $scope.modal.show();
    };
    $scope.closeDatasetModal = function() {
      console.log('fecha modal');
      $scope.modal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/modals/user-list.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal3 = modal;
    });
    $scope.openUserListModal = function(title, list) {
      $scope.listTitle = title;
      $scope.userList = list;
      $scope.modal3.show();
    };
    $scope.closeUserListModal = function() {
      console.log('fecha modal');
      $scope.modal3.hide();
    };

    $ionicModal.fromTemplateUrl('templates/modals/tag-list.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal4 = modal;
    });
    $scope.openTagList = function() {
      $scope.modal4.show();
    };
    $scope.closeTagList = function() {
      $scope.modal4.hide();
    };

    $ionicModal.fromTemplateUrl('templates/modals/dataset-list.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal5 = modal;
    });
    $scope.openDatasetList = function() {
      $scope.modal5.show();
    };
    $scope.closeDatasetList = function() {
      $scope.modal5.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
      $scope.modal1.remove();
      $scope.modal3.remove();
      $scope.modal4.remove();
      $scope.modal5.remove();
      $scope.popover.remove();
  });

  //   $scope.openShare = function () {
  //     window.plugins.socialsharing.share('This is my message', 'Subject string', null, 'http://www.mylink.com');
  // }
});

