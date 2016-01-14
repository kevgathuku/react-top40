(function() {
  'use strict';

  let assign = require('object-assign');
  let AppDispatcher = require('../dispatcher/Top40Dispatcher');
  let Top40Constants = require('../constants/Top40Constants');
  let BaseStore = require('./BaseStore');

  let Top40Store = assign({}, BaseStore);

  // Register callback to handle all updates
  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case Top40Constants.SINGLES_GET:
        // Save the data received from the backend to the store
        Top40Store.setData(action.data);
        break;
      default:
        // do nothing by default
    }

    return true; // No errors. Needed by promise in Dispatcher.
  });

  module.exports = Top40Store;

})();
