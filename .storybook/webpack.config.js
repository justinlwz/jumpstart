module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.svg$/,
    exclude: /node_modules/,
    loaders: 'file-loader',
  });

  return config
}