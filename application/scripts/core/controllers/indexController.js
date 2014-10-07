/**
* IndexController
*
*  Firstly the current template URL is set to a custom value based on the stored
*  route parameter ("new" in our example).
*  Then using the templateUrl value we $http.get() the contents of the HTML file.
*  The HTML might include some {{bindings}} and Angular-esq code that needs
*  "compiling" by Angular, so that's exactly what we do.
*  $compile(msg.data)($scope) runs Angular over the new HTML.
*  The last part is to insert the new HTML into the ng-views element.
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


