var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    require('./webpack.entry')
  ],
  output: require('./webpack.output'),
  plugins: [
    new CopyWebpackPlugin([{
      from: 'public'
    }]),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: require('./webpack.resolve'),
  module: require('./webpack.module')
};