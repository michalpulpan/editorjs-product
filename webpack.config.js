const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
    library: 'Product',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}