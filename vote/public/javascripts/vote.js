var app = angular.module('app', ['ui.router']);
var curCandidates=[];
var myName;

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    console.log("State provider");
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '/main.html',
        controller: 'MainCtrl'
      })
      .state('voteTab', {
        url: '/voteTab',
        templateUrl: '/voteTab.html',
        controller: 'voteTabCtrl'
      })
      .state('adminTab', {
        url: '/adminTab',
        templateUrl: '/adminTab.html',
        controller: 'adminTabCtrl'
      });
      

    $urlRouterProvider.otherwise('main');
  }
]);

app.factory("Factory", [function() {
  var o = {
      name:myName,
      candidates:curCandidates,
      ballot:[]
  };
  return o;
}]);

app.controller('MainCtrl',
  function($scope, $http, Factory,$window) {
    $scope.name=Factory.name;
    $scope.begin = function() {
      if(!$scope.sessionName){
        alert("Name Required");
        return;
      }
      else{
        $scope.name=$scope.sessionName;
        console.log("name",$scope.name);
        myName=$scope.name;
        if ($scope.name=="Admin"){
            $window.location.href="#/adminTab";
        }
        else{
        $window.location.href="#/voteTab";
        }
      }
    };

  }
);

app.controller('voteTabCtrl',
  function($scope, $http, Factory, $interval) {
    console.log("comment state");
    $scope.name = Factory.name;
    $scope.ballot=Factory.ballot;
    $scope.candidates=Factory.candidates;
    console.log("name",$scope.name,myName);
    $interval(function(){
        $scope.refresh();
      },5000);

    $scope.refresh = function() {
      $http.get("/").then(function(response) {
        $scope.candidates = response["data"];
      });
    };
    $scope.postMessage = function(name) {
        
    };
   
  });

