'use strict';
var requireDirectory = require('require-directory');
var debug = require('debug')('route:env');

module.exports = function(app) {

    // get all route modules
    var routes = requireDirectory(module);

    // pass the app to each
    Object.keys(routes).forEach(function(route){

        debug('route', 'load', route);
        routes[route](app);

    })
};