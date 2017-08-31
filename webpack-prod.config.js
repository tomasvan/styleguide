const path = require('path');
const webpack = require('webpack');

const browsers = 'ie >= 11, last 2 versions';

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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers
                                },
                                modules: false
                            }],
                            'react'
                        ]
                    }
                  }
                ]
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