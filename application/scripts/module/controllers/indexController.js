define([
   './definition'
], function(controllers){
    controllers.controller('module_indexController', ['$scope', 'testService', function($scope, testService){

        testService.greet('module ahoj');

    }]);

});
