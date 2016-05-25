var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/gandalf', {
      templateUrl: '/views/gandalf.html',
      controller: "gandalfController"
    })
    .when('/genpep', {
      templateUrl: '/views/genpep.html',
      controller: "genpepController"
    })
    .when('/juno', {
      templateUrl: '/views/juno.html',
      controller: "junoController"
    })
    .otherwise({
      redirectTo: 'juno'
    })
}]);
