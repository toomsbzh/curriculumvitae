myProjectApp.controller('homeController', ['$scope', 'Profile', function($scope, Profile) {
    $scope.pageClass = 'page-home';
    $scope.greeting = "Cool ca fonctionne en angular";
    $.backstretch("/images/wall-1.jpg", {duration: 3000, fade: 750});

    $scope.profile = {};
    var promise = Profile.getProfile();
    promise.then(function(data) {
      $scope.profile = data.data;
    });
}]);

myProjectApp.directive('homeSkill', function(){
  return{
       restrict: 'EA',
       templateUrl : './templates/home-skill.html',
       link: function(scope, element, attrs){
         angular.element(document).ready(function (){
           var domElement = element.children('.circle');
           element.click(function(){
             domElement.css('background','red');
           });
         });
       }
  }
});
