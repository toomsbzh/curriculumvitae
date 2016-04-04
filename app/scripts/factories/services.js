var services = angular.module('services', []);

services.service('Profile', function($http, $q){
   var deferred = $q.defer();
   $http.get('data/data.json').then(function(data) {
       deferred.resolve(data);
   });
   this.getProfile = function(){
       return deferred.promise;
   };
});
