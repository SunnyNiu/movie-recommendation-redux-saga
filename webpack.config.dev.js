const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUNDLE_NAME = 'bundle';

const ASSET_PATH = process.env.ASSET_PATH || '';

module.exports = () => ({
  mode: 'development',
  context: path.resolve(ROOT_PATH, 'src'),
  entry: ['./client/index.js'],
  output: {
    publicPath: ASSET_PATH,
    path: path.resolve(ROOT_PATH, 'build'),
    filename: `${BUNDLE_NAME}.js`,
  },
  devServer: {
    stats: 'minimal',
    hot: true,
    publicPath: '/',
    port: 3000,
    host: 'localhost',
    noInfo: false,
    open: true,
    proxy: {
      '/movie': {
        target: 'http://localhost:4000',
      },
      '/recommend': {
        target: 'http://localhost:4000',
      },
      '/images': {
        target: 'http://localhost:4000',
      }
    }
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('src'), path.resolve('src/client'), path.resolve('node_modules')],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new HtmlWebPackPlugin({
      template: '../public/index.html',
      filename: './index.html',
      inject: false,
      showErrors: true,
    }),
  ],
});
