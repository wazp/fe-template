var path = require('path')
var webpack = require('webpack')
var extractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: {
        main: [
            //'./src/main.js',
            './Assets/Styles/Main.less'
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./Assets/bundled")
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: extractTextPlugin.extract('css-loader!postcss-loader!less-loader!import-glob-loader')
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')
                        }
                    },
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new extractTextPlugin('[name].bundle.css'), // save the css as external files instead of bundling them into the javascripts
        new webpack.WatchIgnorePlugin([/node_modules/]) // turn off watcher for node_modules and our vueImports.js file created above
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
