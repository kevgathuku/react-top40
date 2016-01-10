/*eslint no-console: 0*/
(() => {
  'use strict';

  var express = require('express');
  var path = require('path');
  var httpProxy = require('http-proxy');
  var favicon = require('serve-favicon');
  var logger = require('morgan');

  var routes = require('./routes/index');
  var publicPath = path.resolve(__dirname, '..', 'public');

  require('dotenv').load();

  var isProduction = process.env.NODE_ENV === 'production';

  var proxy = httpProxy.createProxyServer();
  var app = express();

  app.use(logger('dev'));
  // uncomment after placing your favicon in /public
  app.use(favicon(path.join(__dirname, '..', 'app', 'images', 'favicon.ico')));
  // We point to our static assets
  app.use(express.static(publicPath));

  // We only want to run the workflow when not in production
  if (!isProduction) {
    // We require the bundler inside the if block because
    // it is only needed in a development environment. Later
    // you will see why this is a good idea
    var bundle = require('./bundle.js');
    bundle();

    // Any requests to localhost:3000/build is proxied
    // to webpack-dev-server
    app.all('/build/*', function(req, res) {
      proxy.web(req, res, {
        target: 'http://localhost:8080/'
      });
    });

  }

  // It is important to catch any errors from the proxy or the
  // server will crash. An example of this is connecting to the
  // server when webpack is bundling
  proxy.on('error', function() {
    console.log('Could not connect to proxy, please try again...');
  });


  app.use('/', routes);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      if (res.headersSent) {
        return next(err);
      }
      res.status(err.status || 500).json({
        error: err.message
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(err.status || 500).json({
      error: err.message
    });
  });


  module.exports = app;

})();
