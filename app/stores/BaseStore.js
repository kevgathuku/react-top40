(() => {
  'use strict';

  let EventEmitter = require('events').EventEmitter;
  let assign = require('object-assign');

  let BaseStore = assign({}, EventEmitter.prototype, {
    data: null,
    setData: (data) => {
      this.data = data;
      this.emitChange();
    },

    getData: () => {
      return this.data;
    },

    emitChange: () => {
      this.emit('change');
    },

    addChangeListener: (callback) => {
      this.on('change', callback);
    },

    removeChangeListener: (callback) => {
      this.removeListener('change', callback);
    }
  });

  module.exports = BaseStore;

})();
