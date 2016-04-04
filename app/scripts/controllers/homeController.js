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

var circle = new ProgressBar.Circle('.circle', {
    color: '#FCB03C',
    strokeWidth: 3,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

circle.animate(1, function() {
    circle.animate(0);
})
