const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, '../'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: "babel"}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  babel: {
      presets: ['es2015']
  }
}
