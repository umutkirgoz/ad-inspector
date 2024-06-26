var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'loader.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /(node_modules)/,
                    path.resolve(__dirname, 'src/background.js'),
                    path.resolve(__dirname, 'src/loader.js'),
                ],
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
};
