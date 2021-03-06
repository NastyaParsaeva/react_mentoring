const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  mode: 'production',

  plugins: [
    new AppCashePlugin({
      exclude: ['.htaccess']
    }),
    new webpack.optimize.UblifyJsPlugin()
  ]
});