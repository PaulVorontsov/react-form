const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react', 'redux', 'react-redux', 'react-dom'],
        bundle: './client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', "react", "stage-0"],
                            plugins: [
                                'syntax-decorators',
                                'transform-decorators-legacy',
                                ["transform-class-properties", { "spec": true }]
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.min.js'})
    ],
    target: "web",
    watch: true,
};