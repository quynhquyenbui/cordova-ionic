angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, LoginService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
   // console.log('Doing login', $scope.loginData);
    LoginService.Login($scope.loginData, function(data){
      console.log(data.data.info);
    });
    
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
})
.controller('CityDetailCtrl', function($scope, $stateParams, City) {
  $scope.city_id = $stateParams.cityId;
  City.getWeather($scope.city_id, function(data){
    $scope.city = data.data;
  });
})
.controller('CityListCtrl', function($scope, CityList) {
  $scope.citylist = CityList.query();
  console.log($scope.citylist);
})
.controller('SessionsCtrl', function($scope, Session) {
    $scope.sessions = Session.query();
})
.controller('SessionCtrl', function($scope, $stateParams, Session) {
    $scope.session = Session.get({sessionId: $stateParams.sessionId});
});
