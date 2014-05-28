// main js script called from script tag on index.html
// configuration of require.js and call of require function
require.config({
   baseUrl: '../',
   paths: {
       'angular': 'vendor/angular',
       'domReady': 'vendor/requirejs/domReady',
       'angularRoute': 'vendor/angular-route',
       'angularResource': 'vendor/angular-resource',
       'jquery': 'vendor/jquery-1.11.1'
   },

   // allows to manage dependencies of libraries without amd support
   // example: angular-route, angular-resource need angular to be loaded first
   shim: {
       angular: {
           exports: 'angular',
           deps: ['jquery']
       },
       angularResource: {
           deps: ['angular']
       },
       angularRoute: {
           deps: ['angular']
       }
   },

   // calls bootstrap.js
   deps: ['scripts/bootstrap']
});
