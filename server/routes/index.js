(() => {
  'use strict';

  let express = require('express'),
    router = express.Router(),
    Singles = require('../controllers/singles');

  router.route('/top40/api/singles')
    .get(Singles.get);

  module.exports = router;

})();
