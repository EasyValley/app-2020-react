const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.config.base');

const resolve = (dir) => path.join(__dirname, dir);
const config = {
  // mode: 'production',
  mode:'development',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  devtool: 'source-map',
};

module.exports = merge(baseConfig, config);
