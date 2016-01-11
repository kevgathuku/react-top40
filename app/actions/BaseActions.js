(() => {
  'use strict';

  let Top40Dispatcher = require('../dispatcher/Top40Dispatcher');
  let request = require('superagent');

  module.exports = {
    get: function(url, actionType) {
      request
        .get(url)
        .end(function(err, result) {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result.body
          });
        });
    },

    delete: function(url, data, actionType) {
      request
        .delete(url)
        .end(function(err, result) {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result.body
          });
        });
    },

    put: function(url, data, actionType) {
      request
        .get(url)
        .send(data)
        .end(function(err, result) {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result.body
          });
        });
    },

    post: function(url, data, actionType) {
      request
        .post(url)
        .send(data)
        .end(function(err, result) {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result.body
          });
        });
    }
  };

})();
