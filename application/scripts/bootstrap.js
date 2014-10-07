/*
* Bootstrap waits for the dom to be ready (using requireJs plugin domReady)
* and bootstrap the angular app
*/
define([
   'angular',
   'domReady',
   'scripts/router',
   'scripts/app'
], function(angular, domReady) {
    domReady(function(){
        angular.bootstrap(document, ['myApp']);
    });
});

