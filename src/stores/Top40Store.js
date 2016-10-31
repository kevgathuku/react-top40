import AppDispatcher from '../dispatcher/Top40Dispatcher';
import Top40Constants from '../constants/Top40Constants';
import BaseStore from './BaseStore';

let Top40Store = Object.assign({}, BaseStore);

// Register callback to handle all updates
AppDispatcher.register((action) => {
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
