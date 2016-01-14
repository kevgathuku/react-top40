(() => {
  'use strict';

  let React = require('react');

  let Top40Actions = require('../actions/Top40Actions');
  let Top40Store = require('../stores/Top40Store');
  let Single = require('./Single.jsx');

  class Top40 extends React.Component{
    constructor() {
      super();
      this.state = {singles: null};
      // React components using ES6 classes no longer
      // autobind this to non React methods.
      // This is required in the constructor
      // to make 'this' available to non React methods
      this.populateSingles = this.populateSingles.bind(this);
  }

    componentWillMount() {
      Top40Actions.getSingles();
      Top40Store.addChangeListener(this.populateSingles);
    }

    populateSingles() {
      let data = Top40Store.getData();
      this.setState({singles: data});
    }

    render() {
      return (
        <div>
          <h1>The Official UK Top 40 Singles Chart</h1>
          {this.state.singles ?
              <Single entries={this.state.singles.entries} /> :
               <p>Loading...</p>}
        </div>
      );
    }
  }

  module.exports = Top40;

})();
