(() => {
  'use strict';

  let Top40Dispatcher = require('../dispatcher/Top40Dispatcher');
  let request = require('superagent');

  module.exports = {
    get: (url, actionType) => {
      request
        .get(url)
        .end((err, result) => {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result.body
          });
        });
    },

    delete: (url, data, actionType) => {
      request
        .delete(url)
        .end((err, result) => {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result.body
          });
        });
    },

    put: (url, data, actionType) => {
      request
        .get(url)
        .send(data)
        .end((err, result) => {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result.body
          });
        });
    },

    post: (url, data, actionType) => {
      request
        .post(url)
        .send(data)
        .end((err, result) => {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result.body
          });
        });
    }
  };

})();
