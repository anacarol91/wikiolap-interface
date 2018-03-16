angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, $ionicPopup, IonicClosePopupService, Estabelecimentos) {

  $scope.eventos = Estabelecimentos.all();
  //$scope.groupedPairs = _.chain(eventos).groupBy('date').pairs().sortBy(0).value();

  $scope.refreshEventos = function () {
    $scope.eventos = Estabelecimentos.all();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.change = function(){
    $state.go('tab.categorias');
  }

  $scope.testAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Alert popup',
      template: 'Tap outside it to close it'
    });
    IonicClosePopupService.register(alertPopup); // condição para ionic-close-popup
  };
})

.controller('CategoriasCtrl', function($scope, Categorias, Estabelecimentos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.categorias = Categorias.all();
  $scope.estabelecimentos = Estabelecimentos.all();

  $scope.refreshCategorias = function () {
    $scope.categorias = Categorias.all();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.refreshEstabelecimentos = function () {
    $scope.estabelecimentos = Estabelecimentos.all();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.remove = function(categoria) {
    Categorias.remove(categoria);
  };
})

.controller('EstabelecimentosCtrl', function($scope, $state, $stateParams, Estabelecimentos) {
  $scope.categoria = Estabelecimentos.getCategoria($stateParams.categoriaId);
  $scope.search = {};

  $scope.estabelecimentos = Estabelecimentos.all();

  $scope.refreshEstabelecimentos = function () {
    $scope.estabelecimentos = Estabelecimentos.all();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.change = function(){
    $state.go('tab.categorias');
  }

  $scope.remove = function(categoria) {
    Estabelecimentos.remove(categoria);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
