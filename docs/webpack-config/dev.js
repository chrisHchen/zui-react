const webpack = require('webpack');
const path = require('path');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
];

const postcssPlugins = function() {
  return [
    require('stylelint')(),
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('precss')(),
    require('postcss-reporter')(),
  ];
};

module.exports = {
  entry: path.join(__dirname, '../src/app.js'),
  resolve: {
    extensions: ['.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, path.join(__dirname, '../src/assets')),
    port: 9001,
    hot: true,
  },
  stats: {
    color: true,
    reason: true,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: postcssPlugins,
          },
        },
      ],
    }],
  },
};
