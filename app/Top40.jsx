(() => {
  'use strict';

  let React = require('react');
  var request = require('superagent');

  class Top40 extends React.Component {
    getInitialState() {
      return {singles: []};
    }

    componentDidMount() {
      request.get('/top40/api/singles')
        .set('Accept', 'application/json')
        .end(function(err, res) {
        // Calling the end function will send the request
        console.log(res.body);
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
