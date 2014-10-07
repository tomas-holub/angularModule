define([
   './definition'
], function(controllers){
    controllers.controller('module1_indexController', ['$scope', 'testService', function($scope, testService){
        testService.greet('hallo module1');
    }]);
});
