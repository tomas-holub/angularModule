// main js script called from script tag on index.html
// configuration of require.js and call of require function
require.config({
   baseUrl: '../',
   paths: {
       'angular': 'bower_components/angular/angular',
       'domReady': 'bower_components/domready/ready',
       'angularRoute': 'bower_components/angular-route/angular-route',
       'angularResource': 'bower_components/angular-resource/angular-resource',
       'jquery': 'bower_components/jquery/dist/jquery'
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
