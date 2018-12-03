var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = {

  entry: ['babel-polyfill', './bin/orderWechatServer.js'],
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'orderWechatServer.js'
  },
  externals: nodeModules,
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
        }
    ]
  }
}