const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.sass$/;

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  watchOptions: { ignored: /dist/ },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.sass'],
    alias: { 'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom' },
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  },
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      },
    }, {
      test: /\.sass$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        }
      }, 'sass-loader'],
      exclude: GLOBAL_CSS_REGEXP,
    }, {
      test: GLOBAL_CSS_REGEXP,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.(png|jp(e*)g|svg|gif|ico)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'img/[hash]-[name].[ext]',
        },
      }],
    }, {
      test: /\.(mp3)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'img/[hash]-[name].[ext]',
        },
      }],
    }]
  },
  devtool: setupDevtool(),
  plugins: IS_DEV ? [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new CopyPlugin({ patterns: [{ from: path.resolve(__dirname, '../src/favicon.ico') }] })
  ] : [],
};