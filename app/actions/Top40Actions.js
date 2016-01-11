(() => {
  'use strict';

  let Top40Constants = require('../constants/Top40Constants'),
    BaseActions = require('./BaseActions');

  module.exports = {

    getSingles: function() {
      BaseActions.get('/top40/api/singles', Top40Constants.SINGLES_GET);
    }
  };
})();
