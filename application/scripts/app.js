/*
* App defines dependencies of angular app on controllers, services...
* Returns angular.module
*/

console.log('app.js');
define([
   'angular',
   'angularRoute',
   'angularResource',
   'scripts/core/controllers/loader',
   'scripts/core/services/loader',
   'scripts/module/services/loader',
   'scripts/module/controllers/loader'

], function(angular) {
       return angular.module('myApp', [
           'ngRoute',
           'ngResource',
           'app.core.controllers',
           'app.core.services',
           'app.module.services',
           'app.module.controllers'
   ]);
});