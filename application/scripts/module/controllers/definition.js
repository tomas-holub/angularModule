// define the module controllers
// module doesn't have any dependencies
console.log('module definiton');
define(['angular'], function(ng) {
   'use strict';
   return ng.module('app.module.controllers', []);
});


