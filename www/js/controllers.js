controllers.controller('MainCtrl', function($scope, $ionicPopup, $state, $stateParams, $ionicModal, $ionicHistory, $ionicTabsDelegate, IonicClosePopupService, Tags, Datasets, Visualizations, Notifications, Users) {
  $scope.$on('$ionicView.enter', function(e) {
    console.log('enter main controller');
    $scope.search = {};
    $scope.listTitle = '';

    $scope.tags = Tags.all();
    $scope.datasets = Datasets.all();
    $scope.visualizations = Visualizations.all();
    $scope.notifications = Notifications.all();
    $scope.users = Users.all();
    $scope.mainUser = $scope.users[0];

    $scope.listType = $stateParams.type;
    $scope.tag = Tags.get($stateParams.tagID);
    $scope.tagVisualizations = Visualizations.getByTag($stateParams.tagID);
  });

  $scope.getTag = (itemID) => {
    $scope.tag = Tags.get(itemID);
  }

  var getAccountList = (listName) => {
    console.log(listName);
    $scope.isDS = false;
    switch(listName) {
      case 'datasets':
        $scope.isDS = true;
        $scope.listTitle = 'Meus Datasets';
        $scope.accountList = Datasets.getByUser(0);
        break;
      case 'visualizations':
        $scope.listTitle = 'Minhas Visualizações';
        $scope.accountList = Visualizations.getByUser(0);
        break;
      case 'followed':
        $scope.listTitle = 'Visualizações Seguidas';
        $scope.accountList = Visualizations.getFollowed();
        break;
      case 'liked':
        $scope.listTitle = 'Visualizações Curtida';
        $scope.accountList = Visualizations.getLiked();
        break;
      default: break;
    }
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

  // $scope.remove = function(categoria) {
  //   Categorias.remove(categoria);
  // };

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.openSearch = function(){
    $state.go('tab.search');
  }

  $scope.openList = function(title){
    $state.go('tab.explore-list');
  }

  // $scope.selectTabWithIndex = function(index) {
  //   $ionicTabsDelegate.select(index);
  //   $state.go('tab.search');
  // }

   $scope.userListAlert = function(title, list) {
    $scope.listTitle = title;
    $scope.userList = list;
    var alertPopup = $ionicPopup.prompt({
       title: 'Password Check',
       templateUrl: 'templates/popups/user-list.html'
     });
    IonicClosePopupService.register(alertPopup); // condição para ionic-close-popup
  };

  $ionicModal.fromTemplateUrl('templates/modals/visualization-detail.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal1 = modal;
    });
    $scope.openVisualizationModal = function(itemID) {
      console.log('open modal ' + itemID);
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
    $scope.openDatasetModal = function(itemID) {
      console.log('open modal dataset ' + itemID);
      $scope.dataset = Datasets.get(itemID);
      $scope.modal.show();
    };
    $scope.closeDatasetModal = function() {
      console.log('fecha modal');
      $scope.modal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/modals/user-profile.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal2 = modal;
    });
    $scope.openUserModal = function(itemID) {
      console.log('open modal user ' + itemID);
      $scope.user = Users.get(itemID);
      console.log($scope.user);

      $scope.userVisualizations = Visualizations.getByUser(itemID);
      console.log($scope.userVisualizations);
      $scope.userDatasets = Datasets.getByUser(itemID);
      $scope.modal2.show();
    };
    $scope.closeUserModal = function() {
      console.log('fecha modal');
      $scope.modal2.hide();
    };

    $ionicModal.fromTemplateUrl('templates/modals/user-list.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal3 = modal;
    });
    $scope.openAccountListModal = function(title, list) {
      $scope.listTitle = title;
      $scope.userList = list;
      $scope.modal3.show();
    };
    $scope.closeAccountListModal = function() {
      console.log('fecha modal');
      $scope.modal3.hide();
    };

    $ionicModal.fromTemplateUrl('templates/modals/account-list.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal4 = modal;
    });
    $scope.openAccountListModal = function(list) {
      getAccountList(list);
      $scope.modal4.show();
    };
    $scope.closeAccountListModal = function() {
      console.log('fecha modal');
      $scope.modal4.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
      $scope.modal1.remove();
      $scope.modal2.remove();
      $scope.modal3.remove();
      $scope.modal4.remove();
  });
});

