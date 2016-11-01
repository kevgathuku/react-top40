import React from 'react';

class Single extends React.Component {
  static propTypes = {
    track: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track
    };
  }
  render() {
    return (
      <div className="item">
        <h5>{this.state.track.title} <small>{this.state.track.artist}</small></h5>
          {this.state.track.position === 25
            ? <img alt={this.state.track.title} src="http://is3.mzstatic.com/image/thumb/Music62/v4/f7/93/79/f79379c8-86c0-fca6-6d46-5d027d6936e7/source/100x100bb.jpg"/>
            : <br/>}
      </div>
    );
  }
}

export default Single;

// <img alt={single.title} src={`http://lorempixel.com/${width}/400`}/>
