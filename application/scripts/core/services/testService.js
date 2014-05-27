define(['./definition'], function(services) {
   services.factory('testService', function($window) {
       return {
           greet: function(text) {
               console.log(text);
           }
       };
   });
});
