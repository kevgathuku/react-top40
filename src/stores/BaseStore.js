import EventEmitter from 'events';

let BaseStore = Object.assign({}, EventEmitter.prototype, {
  data: null,
  setData: function(data) {
    this.data = data;
    this.emitChange();
  },

  getData: function() {
    return this.data;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = BaseStore;
