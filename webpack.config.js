const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      { 
        test: /\.scss$/i, 
        use: ["style-loader",
          MiniCssExtractPlugin.loader,
         "css-loader", 
         "sass-loader"], 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new MiniCssExtractPlugin({filename: 'styles.css'}),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 2727,
    stats: 'errors-only',
  },

};