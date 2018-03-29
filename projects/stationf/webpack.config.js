var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test : /\.jsx?/,
        include: APP_DIR,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'assets/[name].[ext]'
            } 
        }]
      },
      {
        test: /\.(otf)$/,  
        use: [{
            loader: 'url-loader'
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

module.exports = config;