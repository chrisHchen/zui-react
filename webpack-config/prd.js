const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin('build'),
  new ExtractTextPlugin('theme/zui-react.css'),
];
const postcssPlugins = [
  require('postcss-import')(),
  require('postcss-cssnext')(),
  require('cssnano')(),
];

module.exports = {
  entry: {
    'zui-react': './src/test/app.js',
  },
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
    filename: '[name].js',
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
