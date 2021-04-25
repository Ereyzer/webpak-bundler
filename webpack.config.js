const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
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
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 2727,
    stats: 'errors-only',
  },

};