(() => {
  'use strict';

  let React = require('react');
  let Masonry = require('react-masonry-component');

  let masonryOptions = {
      transitionDuration: 0,
      gutter: 20
  };
  let Single = React.createClass({
    render: function() {
      let renderSingle = function(single) {
        let options = [200, 250, 300, 350, 400];
        let width = options[Math.floor(Math.random() * options.length)];
        return (
          <div className="item">
            <h3>{single.title} <small>{single.artist}</small></h3>
            <img alt="Image" src={`http://beerhold.it/${width}/400`} />
          </div>
        );
      };
      return (
            <Masonry
                className={'grid'}
                options={masonryOptions}
            >
                {this.props.entries.map(renderSingle)}
            </Masonry>
      );
    }
  });

  module.exports = Single;
})();
