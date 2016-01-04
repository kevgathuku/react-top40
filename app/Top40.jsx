(() => {
  'use strict';

  let React = require('react');
  var request = require('request');
  var cheerio = require('cheerio');

  class Top40 extends React.Component {
    getInitialState() {
      return {singles: []};
    }

    componentDidMount() {
      request('http://www.bbc.co.uk/radio1/chart/singles/print', function(error, response, html) {
        if (!error) {
          // Next, we'll utilize the cheerio library on the returned html
          var $ = cheerio.load(html);
          console.log($.html());
        }
      });
    }

    render() {
      return (
        <h1>Hello world!</h1>
      );
    }
  }

  module.exports = Top40;

})();
