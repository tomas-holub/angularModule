define([
   'scripts/app'
], function(app) {
console.log('router');
   app.config(['$routeProvider', function($routeProvider){
       $routeProvider.when(
               '/:module/:controller',
               {
                   templateUrl: 'scripts/core/views/index.html',
                   controller: 'IndexController'
               });
       $routeProvider.otherwise(
               {
                   redirectTo: '/core/index'
               });
   }]);
});