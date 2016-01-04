(() => {
  'use strict';

  let React = require('react');
  let HelloWorld = require('./HelloWorld.jsx');

  React.render(<HelloWorld /> , document.getElementById('content'));
})();
