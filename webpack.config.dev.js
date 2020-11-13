const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base');

const resolve = (dir) => path.join(__dirname, dir);
const config = {
  mode: 'development',
  plugins: [
    // new HardSourceWebpackPlugin(),

  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  devtool: 'source-map',
  watchOptions: {
    aggregateTimeout: 200,
    poll: 200
  },
  devServer: {
    port: 8080,
    hot: true,
    publicPath: '/',
    host: '0.0.0.0',
    // open: true,
    historyApiFallback: true,
  },
};

module.exports = merge(baseConfig, config);
