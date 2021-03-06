import AppDispatcher from '../dispatcher/Top40Dispatcher';
import Top40Constants from '../constants/Top40Constants';
import BaseStore from './BaseStore';

let Top40Store = Object.assign({}, BaseStore, {
  singles: null,
  trackInfo: null,

  setSingles: function(data) {
    this.singles = data;
    localStorage.setItem('singles', JSON.stringify(data));
    this.emitChange();
  },

  getSingles: function() {
    return this.singles;
  },

  setTrackInfo: function(data, position) {
    // Store only results with some response data
    if (data.resultCount > 0) {
      this.trackInfo = data.results[0];
      localStorage.setItem(position, JSON.stringify(data.results[0]));
    } else {
      this.trackInfo = null;
    }
    this.emitChange('trackInfo');
  },

  getTrackInfo: function() {
    return this.trackInfo;
  },
});

// Register callback to handle all updates
AppDispatcher.register((action) => {
  switch (action.actionType) {
  case Top40Constants.SINGLES_GET:
    // Save the data received from the backend to the store
    Top40Store.setSingles(action.data);
    break;
  case Top40Constants.TRACK_INFO:
    // Save the data received from the backend to the store
    Top40Store.setTrackInfo(action.data, action.position);
    break;
  default:
    // do nothing by default
  }

  // No errors. Needed by promise in Dispatcher.
  return true;
});

module.exports = Top40Store;
