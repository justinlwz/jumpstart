const path = require('path');

module.exports = {
  entry: ['@babel/polyfill'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [require.resolve('react-docgen-typescript-loader')],
      },
    ],
  }
}
