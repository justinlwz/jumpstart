module.exports = {
    entry: ['@babel/polyfill'],
    module: {
        rules: [
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    }
}