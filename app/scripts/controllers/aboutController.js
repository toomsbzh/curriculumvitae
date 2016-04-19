myProjectApp.controller('aboutController', ['$scope', function($scope) {
    $scope.pageClass = 'page-about';
    $scope.title = "Ma page about";
    $.backstretch("/images/wall-2.jpg", {duration: 3000, fade: 750});

    $scope.calculateAge = function calculateAge(birthday) {
        var bday = new Date();
        bday = birthday;
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}]);
