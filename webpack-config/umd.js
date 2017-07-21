const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new CleanWebpackPlugin(path.join('build'), {
    root: path.join(__dirname, '../'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  new ExtractTextPlugin('zui-theme-default.css'),
];
const postcssPlugins = [
  require('postcss-import')(),
  require('postcss-cssnext')(),
  require('precss')(),
  require('cssnano')(),
];
const entries = {
  ['zui-react.umd.js']: path.join(__dirname, '../src/index.js'),
  ['zui-theme-default.css']: path.join(__dirname, '../src/style.js'),
};
module.exports = {
  entry: entries,
  externals: [
    'react',
    'react-dom',
    'react-tap-event-plugin',
  ],
  resolve: {
    extensions: ['.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name]',
    library: 'zui-react',
    libraryTarget: 'umd',
  },
  plugins: plugins,
  stats: {
    color: true,
    reason: true,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'postcss-loader',
            options: {
              sourceMap: false,
              plugins: postcssPlugins,
            },
          },
        ],
      }),
    }],
  },
};
