const path = require('path');
module.exports = require('knex');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts'],
  },
  devServer: {
    compress: true,
    hot: true,
    contentBase: './server/public',
  },
  devtool: 'source-map',
  externals: {
    sqlite3: 'commonjs sqlite3',
    knex: 'commonjs knex',
  },
};
