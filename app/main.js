(() => {
  'use strict';

  let React = require('react');
  let ReactDOM = require('react-dom');
  let Top40 = require('./components/Top40.jsx');

  ReactDOM.render(<Top40 /> , document.getElementById('content'));
})();
