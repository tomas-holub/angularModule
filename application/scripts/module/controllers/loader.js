// load the module contents
console.log('module loader');
define([
   './indexController'
], function (f) {
    console.log(f, 'fei');
});

