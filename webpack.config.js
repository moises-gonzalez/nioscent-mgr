const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.html',
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.html'
  },
  devServer: {
      port: 5050
  },
  module: {
      rules: [{
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      }]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
  ]

}