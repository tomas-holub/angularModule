/*
* App defines dependencies of angular app on controllers, services...
* Returns angular.module
*/
define([
   'angular',
   'angularRoute',
   'angularResource',
   'scripts/core/controllers/loader',
   'scripts/core/services/loader',
   'scripts/module/services/loader',
   'scripts/module/controllers/loader',
   'scripts/module1/controllers/loader'

], function(angular) {
       return angular.module('myApp', [
           'ngRoute',
           'ngResource',
           'app.core.controllers',
           'app.core.services',
           'app.module.services',
           'app.module.controllers',
           'app.module1.controllers'
   ]);
});