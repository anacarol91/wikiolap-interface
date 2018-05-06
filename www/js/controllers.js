controllers.controller('MainCtrl', function($scope, $ionicPopup, $state, $stateParams, $ionicModal, $ionicHistory, IonicClosePopupService, Tags, Datasets, Visualizations, Notifications, Users) {
  $scope.$on('$ionicView.enter', function(e) {
    console.log('enter main controller');
    $scope.search = {};
    $scope.listTitle = '';

    $scope.tags = Tags.all();
    $scope.datasets = Datasets.all();
    $scope.visualizations = Visualizations.all();
    $scope.notifications = Notifications.all();
    $scope.users = Users.all();

    $scope.listType = $stateParams.type;
  });

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

  $scope.remove = function(categoria) {
    Categorias.remove(categoria);
  };

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.openSearch = function(){
    $state.go('tab.search');
  }

  $scope.openList = function(title){
    $state.go('tab.explore-list');
  }

   $scope.testAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Alert popup',
      template: 'Tap outside it to close it'
    });
    IonicClosePopupService.register(alertPopup); // condição para ionic-close-popup
  };

  $ionicModal.fromTemplateUrl('templates/modals/visualization-detail.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openVisualizationModal = function(itemID) {
      console.log('open modal ' + itemID);
      $scope.visualization = Visualizations.get(itemID);
      $scope.modal.show();
    };
    $scope.closeVisualizationModal = function() {
      console.log('fechaa');
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
  });
});

