const path = require('path');

module.exports = {
  entry: ['@babel/polyfill'],
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
          'react-docgen-typescript-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts' ]
  },
}