'use strict';

// firebase configaration
var config = {
    apiKey: "AIzaSyBM9b4yZVoAistu5q6I_kNJIkMLLrWx6pY",
    authDomain: "ng-contactlist-app.firebaseapp.com",
    databaseURL: "https://ng-contactlist-app.firebaseio.com",
    storageBucket: "ng-contactlist-app.appspot.com",
    messagingSenderId: "939051784697"
};
firebase.initializeApp(config);
// firebase configaration


// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', 'ngMessages', 'firebase']);

// router
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'contactsController'
  });
}]);

// router


app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
