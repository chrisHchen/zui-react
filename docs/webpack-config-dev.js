const webpack = require('webpack');
const path = require('path');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
];

module.exports = {
  entry: path.join(__dirname, './src/app.js'),
  resolve: {
    extensions: ['.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, './src'),
    port: 9001,
    hot: true,
  },
  stats: {
    color: true,
    reason: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
    ],
  },
};
