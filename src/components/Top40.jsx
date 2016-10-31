import React from 'react';

import Top40Actions from '../actions/Top40Actions';
import Top40Store from '../stores/Top40Store';
import Single from './Single.jsx';

class Top40 extends React.Component {
  constructor() {
    super();
    this.state = {
      singles: null
    };
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
        {this.state.singles
          ? <Single entries={this.state.singles.entries}/>
          : <p>Loading...</p>}
      </div>
    );
  }
}

export default Top40;
