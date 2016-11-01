import React from 'react';
import Masonry from 'react-masonry-component';
import Top40Actions from '../actions/Top40Actions';
import Top40Store from '../stores/Top40Store';
import Single from './Single.jsx';

const masonryOptions = {
  transitionDuration: 0,
  gutter: 20
};

class Top40 extends React.Component {
  constructor() {
    super();
    this.state = {
      singles: null
    };
  }

  componentWillMount() {
    Top40Actions.getSingles();
    Top40Store.addChangeListener(this.populateSingles);
  }

  populateSingles = () => {
    let data = Top40Store.getData();
    this.setState({singles: data.entries});
  }

  render() {
    let renderSingle = function(single) {
      return (
        <Single track={single} key={single.position}/>
      );
    };
    return (
      <div>
        <h1>The Official UK Top 40 Singles Chart</h1>
        {this.state.singles && this.state.singles.length > 1
          ? <Masonry className={'grid'} options={masonryOptions}>
             {this.state.singles.map(renderSingle)}
            </Masonry>
          : <p>Loading...</p>}
      </div>
    );
  }
}

export default Top40;
