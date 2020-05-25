const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new Dotenv()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}