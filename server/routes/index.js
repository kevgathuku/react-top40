(() => {
  'use strict';

  let express = require('express'),
    router = express.Router(),
    singles = require('../controllers/singles');

  router.route('/top40/api/singles')
    .get(singles.get);

  module.exports = router;

})();
