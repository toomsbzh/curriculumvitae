myProjectApp.controller('aboutController', ['$scope', function($scope) {
    $scope.pageClass = 'page-about';
    $scope.title = "Ma page about";
    $.backstretch("/images/wall-2.jpg", {duration: 3000, fade: 750});
}]);
