  var myProjectApp = angular.module('ngProjectApp', ['ngRoute', 'ngAnimate', 'ng-backstretch', 'services'])
  .config([
    '$routeProvider',
    function($routeProvider) {
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./templates/homePage.html",
          controller: "homeController"
        })
        .when("/about-me", {
          templateUrl: "./templates/aboutMe.html",
          controller: "aboutController"
        })
        .when("/contact", {
          templateUrl: "./templates/contactPage.html",
          controller: "contactController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);
