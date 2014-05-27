define([
   './definition'
], function(controllers){
   controllers.controller('module_indexController', ['$scope', 'testService', function($scope, testService){
        console.log('module indexController');
       testService.greet('module ahoj');
//       return controllers;
   }]);
});
