(() => {
  'use strict';

  let moment = require('moment');
  let Xray = require('x-ray');
  let x = Xray();

  module.exports = {
    get: (req, res) => {
      x('http://www.bbc.co.uk/radio1/chart/singles/print', {
        title: 'title',
        keys: ['th'],
        cells: ['td']
      })((err, results) => {
        // Extract the date portion from the page title
        let dateArray = results.title.split(' ').slice(-3);
        // Parse the date from a UTC timestamp to a Unix timestamp
        let parsedDate = moment
          .utc(dateArray.join(' '), 'Do MMMM YYYY')
          .unix()
          .toString();

        // Generate an array of all keys in lowercase
        let keys = results.keys.map(function(value) {
          return value.toLowerCase();
        });
        // Split cells into array containing individual singles data as an array
        let lenKeys = keys.length;
        let singles = [];
        for (let i = 0, len = results.cells.length; i < len; i += lenKeys) {
          singles.push(results.cells.slice(i, i + lenKeys));
        }
        // Convert the data to an array of singles objects with the correct keys
        let result = singles.map((single) => {
          return single.reduce((final, field, index) => {
            final[keys[index]] = field;
            return final;
          }, {});
        });

        // Build the final object to be returned
        let apiSingles = {
          date: parsedDate,
          retrieved: moment.utc().unix(),
          entries: result
        };
        res.json(apiSingles);
      });
    }
  };
})();
