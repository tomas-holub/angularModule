/**
* IndexController
*
* @module core
* @type   controllers
*/
define(['./definition'], function(controllers) {

   controllers.controller('core_indexController', [
       '$scope',
       '$http',
       'testService',

       function (
            $scope,
            $http,
            testService
       ){
        testService.greet('core index controller greetings');
    }]);
});


