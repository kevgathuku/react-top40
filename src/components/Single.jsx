(() => {
  'use strict';

  let React = require('react');
  let Masonry = require('react-masonry-component');

  let masonryOptions = {
    transitionDuration: 0,
    gutter: 20
  };

  class Single extends React.Component {
    render() {
      let renderSingle = function(single) {
        let options = [200, 250, 300, 350, 400];
        let width = options[Math.floor(Math.random() * options.length)];
        return (
          <div className="item" key={single.position}>
            <h5>{single.title} <small>{single.artist}</small></h5>
            <img alt="Image" src={`http://lorempixel.com/${width}/400`}/>
          </div>
        );
      };

      return (
        <Masonry className={'grid'} options={masonryOptions}>
          {this.props.entries.map(renderSingle)}
        </Masonry>
      );
    }
  }

  Single.propTypes = {
    entries: React.PropTypes.arrayOf(React.PropTypes.object)
  };

  module.exports = Single;
})();