import React from 'react';
import Masonry from 'react-masonry-component';
import Top40Actions from '../actions/Top40Actions';
import Top40Store from '../stores/Top40Store';
import Track from './Track.jsx';

const masonryOptions = {
  transitionDuration: 0,
  gutter: 20
};

class Top40 extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: null
    };
  }

  componentDidMount() {
    let cachedSingles = JSON.parse(localStorage.getItem('singles'));
    if (cachedSingles) {
      this.setStateFromCache(cachedSingles);
    } else {
      Top40Actions.getSingles();
      Top40Store.addChangeListener(this.populateSingles);
    }
  }

  componentWillUnmount() {
    Top40Store.removeChangeListener(this.populateSingles);
  }

  setStateFromCache = (cachedSingles) => {
    this.setState({tracks: cachedSingles.entries});
  }

  populateSingles = () => {
    let data = Top40Store.getSingles();
    this.setState({tracks: data.entries});
  }

  renderTrack = (track) => {
    return (
      <Track track={track} key={track.position}/>
    );
  }

  render() {
    return (
      <div>
        <h1>The Official UK Top 40 Singles Chart</h1>
        {this.state.tracks && this.state.tracks.length > 1
          ? <Masonry className={'grid'} options={masonryOptions}>
             {this.state.tracks.map(this.renderTrack)}
            </Masonry>
          : <p>Loading...</p>}
      </div>
    );
  }
}

export default Top40;
