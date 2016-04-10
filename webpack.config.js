var webpack = require('webpack');
var path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var entryPath = './public/a/js';
var distPath = 'public/dist/';
var distUrl = '/dist/';

module.exports = {
  entry:  entryPath,
  output: {
    path:     distPath,
    filename: 'main.js',
    publicPath: distUrl
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/public/a/js',
      },
      {
        test: /\.scss$/, 
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  plugins: [
    //new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main'
    })
  ]
};