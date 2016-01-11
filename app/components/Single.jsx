(() => {
  'use strict';

  let React = require('react');

  let Single = React.createClass({
    render: function() {
      let renderSingle = function(single) {
        return (
          <div className="col-xs-12 col-md-4">
            <p>{single.artist}</p>
          </div>
        );
      };
      return (
        <div>{this.props.entries.map(renderSingle)}</div>
      );
    }
  });

  module.exports = Single;
})();
