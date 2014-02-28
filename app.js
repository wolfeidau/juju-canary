'use strict';
var express = require('express');
var routes = require('./routes');
var path = require('path');
var dustjs = require('adaro');

exports.configure = function(cb) {

  var app = express();

  app.engine('dust', dustjs.dust());

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'dust');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  // load the routes
  routes(app);

  cb(null, app);
};
