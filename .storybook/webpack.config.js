module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.svg$/,
    exclude: /node_modules/,
    use: 'file-loader',
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      }, 
      'react-docgen-typescript-loader'
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}