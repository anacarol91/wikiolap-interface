controllers.controller('MainCtrl', function($scope, $ionicPopup, $state, $stateParams, IonicClosePopupService, Tags, Datasets, Visualizations, Notifications, Users) {

  $scope.$on('$ionicView.enter', function(e) {

    $scope.search = {};

    $scope.tags = Tags.all();
    $scope.datasets = Datasets.all();
    $scope.visualizations = Visualizations.all();
    $scope.notifications = Notifications.all();
    $scope.users = Users.all();

    $scope.tag = Tags.get($stateParams.tagID);
    $scope.visualization = Visualizations.get($stateParams.visualizationID);
    $scope.dataset = Datasets.get($stateParams.datasetID);
    $scope.user = Users.get($stateParams.userID);

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

  $scope.openSearch = function(){
    $state.go('tab.search');
  }

   $scope.testAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Alert popup',
      template: 'Tap outside it to close it'
    });
    IonicClosePopupService.register(alertPopup); // condição para ionic-close-popup
  };

  // $ionicModal.fromTemplateUrl('my-modal.html', {
  //   scope: $scope,
  //   animation: 'slide-in-up'
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });
  // $scope.openModal = function() {
  //   $scope.modal.show();
  // };
  // $scope.closeModal = function() {
  //   $scope.modal.hide();
  // };
  // // Cleanup the modal when we're done with it!
  // $scope.$on('$destroy', function() {
  //   $scope.modal.remove();
  // });
});

