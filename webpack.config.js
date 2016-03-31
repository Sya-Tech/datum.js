const path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, './'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: "babel"}
    ]
  }
}
