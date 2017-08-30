const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src/client'),
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js', // the output bundle
        path: path.resolve(__dirname, 'public/js'),
        sourceMapFilename: 'bundle.map'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: { browsers: 'ie >= 11, last 2 versions' },
                                modules: false
                            }],
                            "react"
                        ]
                    }
                }],
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // No plugins needed. Running `webpack -p` minifies and optimizes for us automatically.
    ]
};