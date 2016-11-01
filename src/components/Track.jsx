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
      artworkUrl: null
    };
  }

  componentDidMount() {
    if (this.state.track.position === 25) {
      Top40Actions.fetchTrackInfo(this.state.track);
    }
    Top40Store.addChangeListener(this.handleTrackInfo, 'trackInfo');
  }

  componentWillUnmount() {
    Top40Store.removeChangeListener(this.handleTrackInfo, 'trackInfo');
  }

  handleTrackInfo = () => {
    let data = Top40Store.getTrackInfo();
    this.setState({
      artworkUrl: data.artworkUrl100
    });
  }

  render() {
    return (
      <div className="item">
        <h5>{this.state.track.title} <small>{this.state.track.artist}</small></h5>
          {this.state.track.position === 25
            ? <img alt={this.state.track.title} src={this.state.artworkUrl}/>
            : <br/>}
      </div>
    );
  }
}

export default Track;

// <img alt={single.title} src={`http://lorempixel.com/${width}/400`}/>
