(() => {
  'use strict';

  let request = require('superagent');

  module.exports = {
    get: (req, res) => {
        let response = res;
        request
        .get('http://pythontop40server.herokuapp.com/v2/singles/')
        .end(function(err, res){
          response.json(res.body);
        });
    }
  };
})();
