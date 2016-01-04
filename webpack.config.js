(() => {
  'use strict';

  let path = require('path');
  let node_modules = path.resolve(__dirname, 'node_modules');
  let pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

  module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    resolve: {
      alias: {
        'react': pathToReact
      }
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/, // A regexp to test the require path. works for js or jsx
        loader: 'babel', // The module to load. "babel" is short for "babel-loader"
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }],
      noParse: [pathToReact, /node_modules\/json-schema\/lib\/validate\.js/]
    }
  };
})();
