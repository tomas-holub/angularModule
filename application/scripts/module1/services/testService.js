define(['./definition'], function(services) {
   services.factory('module_testService', function($window) {
       return {
           greet: function(text) {
               console.log(text);
           }
       };
   });
});
