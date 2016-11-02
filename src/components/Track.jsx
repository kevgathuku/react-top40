import React from 'react';
import Top40Actions from '../actions/Top40Actions';
import Top40Store from '../stores/Top40Store';

class Track extends React.Component {
  static propTypes = {
    track: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      itunesTrackInfo: null
    };
  }

  componentDidMount() {
    let cachedTrack = JSON.parse(localStorage.getItem(this.state.track.position));
    if (cachedTrack) {
      this.setStateFromCache(cachedTrack);
    } else {
      Top40Actions.fetchTrackInfo(this.state.track);
      Top40Store.addChangeListener(this.handleTrackInfo, 'trackInfo');
    }
  }

  componentWillUnmount() {
    Top40Store.removeChangeListener(this.handleTrackInfo, 'trackInfo');
  }

  setStateFromCache = (cachedTrack) => {
    this.setState({
      itunesTrackInfo: cachedTrack
    });
  }

  handleTrackInfo = () => {
    let data = Top40Store.getTrackInfo();
    if (data) {
      this.setState({
        itunesTrackInfo: data
      });
    }
  }

  render() {
    return (
      <div className="item">
        <h5>{this.state.track.title} <small>{this.state.track.artist}</small></h5>
          {this.state.itunesTrackInfo
            ? <img alt={this.state.track.title} src={this.state.itunesTrackInfo.artworkUrl100}/>
            : <img alt={this.state.track.title} src={'http://lorempixel.com/100/100'}/>}
      </div>
    );
  }
}

export default Track;
