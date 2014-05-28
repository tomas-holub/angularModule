define([
   'scripts/app'
], function(app) {
console.log('router');
   app.config(['$routeProvider', function($routeProvider){
       $routeProvider.when(
               '/:module/:controller',
               {
                   templateUrl: function(url) {
                       return 'scripts/' + url.module + '/views/' + url.controller + '.html';
                   },
                   controller: function($scope, $routeParams, $controller) {
                       $controller($routeParams.module + '_' + $routeParams.controller + 'Controller', {$scope: $scope});
                   }
               });
       $routeProvider.otherwise(
               {
                   redirectTo: '/core/index'
               });
   }]);
});