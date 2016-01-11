(() => {
  'use strict';

  let React = require('react');

  let Top40Actions = require('../actions/Top40Actions');
  let Top40Store = require('../stores/Top40Store');
  let Single = require('./Single.jsx');

  let Top40 = React.createClass({
    getInitialState: function() {
      return {
        singles: []
      };
    },

    componentDidMount: function() {
      Top40Actions.getSingles();
      Top40Store.addChangeListener(this.populateSingles);
    },

    componentWillUnmount: function() {
      Top40Store.removeChangeListener(this.populateSingles);
    },


    populateSingles: function() {
      let data = Top40Store.getData();
      if (this.isMounted()) {
        this.setState({singles: data});
      }
    },

    render: function() {
      return (
        <div>
        <h1>Hello world!</h1>
        <p> Hi there</p>
        </div>
      );
    }
  });

  module.exports = Top40;

})();
