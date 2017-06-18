const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const plugins = [
  new webpack.HotModuleReplacementPlugin()
];

const postcssPlugins = [
  require('postcss-import')(),
  require('stylelint')(),
  require('postcss-cssnext')()
];

module.exports = {
    entry: {
        "zui-react": './src/test/app.js',
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    plugins: plugins,
    devServer: {
        contentBase: path.join(__dirname, "../example"),
        port: 9000,
        hot:true
    },
    stats: {
        color: true,
        reason: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }, {
            test: /\.css$/,
            use: [
              'style-loader',
              { loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: postcssPlugins
                }
              }
            ],
        }],
    }
};
