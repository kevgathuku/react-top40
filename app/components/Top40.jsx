(() => {
  'use strict';

  let React = require('react');

  let Top40Actions = require('../actions/Top40Actions');
  let Top40Store = require('../stores/Top40Store');
  let Single = require('./Single.jsx');

  let Top40 = React.createClass({
    getInitialState: function() {
      return {
        singles: null
      };
    },

    componentWillMount: function() {
      Top40Actions.getSingles();
      Top40Store.addChangeListener(this.populateSingles);
    },


    populateSingles: function() {
      let data = Top40Store.getData();
      this.setState({singles: data});
    },

    render: function() {
      return (
        <div>
        <h1>The Official UK Top 40 Singles Chart</h1>
        <p>{this.state.singles ?
            <Single entries={this.state.singles.entries} /> :
             'Loading...'}</p>
        </div>
      );
    }
  });

  module.exports = Top40;

})();
