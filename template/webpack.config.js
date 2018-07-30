const path = require('path'),
    glob = require('glob'),
    fs = require('fs')
    webpack = require('webpack'),
    {{#vue}}
    vueLoaderPlugin = require('vue-loader/lib/plugin'),
    vueFiles = glob.sync('./Assets/vue/OnDemand/*.vue'),
    vueImports = './Assets/Scripts/vueImports.js',
    {{/vue}}
    miniCssExtractPlugin = require("mini-css-extract-plugin"),
    uglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    cleanWebpackPlugin = require('clean-webpack-plugin')

{{#vue}}
/*
 * Go through all *.vue templates and create one file we can import, that initializes them all as components
 */
fs.stat(vueImports, function (err, fileStat) { // check if file exists
    if (err) {
        if (err.code == 'ENOENT') {
            console.log('\x1b[33m%s\x1b[0m', vueImports + ' does not exist yet so no need to delete.');
        }
    } else { // it does, so delete it.
        fs.unlink(vueImports, function (err) {
            if (err) throw err;
            console.log('\x1b[33m%s\x1b[0m', 'Removed ' + vueImports + '. Creating a new one with the following files:');
        });
    }

    var fileStream = fs.createWriteStream(vueImports);
    fileStream.once('open', (fd) => {
        fileStream.write("import Vue from 'vue'\r\n");
        vueFiles.forEach((file) => {
            console.log('\x1b[32m%s\x1b[0m', "file: " + file);
            var nameNoExt = path.basename(path.basename(file), '.vue');
            fileStream.write('Vue.component(\'' + nameNoExt + '\', () => import(/* webpackChunkName: "' + nameNoExt + '" */ \'@/Vue/OnDemand/' + nameNoExt + '.vue\'))\r\n');
        });
        fileStream.end();
        console.log('\x1b[33m%s\x1b[0m', 'Done creating ' + vueImports + '.');
    });
});
{{/vue}}

// Webpack config
module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: [
            'babel-polyfill',
            'whatwg-fetch',
            './Assets/Scripts/Main.js',
            './Assets/Styles/Main.less'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/Assets/bundled/',
        path: path.resolve(__dirname, './Assets/bundled'),
        chunkFilename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].bundle.js' : '[name].bundle.js'


    },
    node: {
        fs: "empty"
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                uglifyOptions: {
                    mangle: true,
                    compress: {
                        //warnings: false,
                        pure_getters: true,
                        unsafe_comps: false, // breaks some minification, so turned off!
                        sequences: true,
                        dead_code: true,
                        conditionals: true,
                        booleans: true,
                        unused: true,
                        if_return: true,
                        join_vars: true,
                        drop_console: true,
                    },
                    output: {
                        comments: false
                    }
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                default: false,
                common: false,
                styles: {
                    name: 'main',
                    test: /\.(less|css)$/, // chunks plugin has to be aware of all kind of files able to output css in order to put them together
                    chunks: 'all',
                    minChunks: 1,
                    enforce: true
                }
            }
        }
    },
    stats: 'errors-only',
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                use: [
                    miniCssExtractPlugin.loader,
                    //'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                    'import-glob-loader'
                ]
            },
            {{#vue}}
            {
                test: /\.vue$/,
                exclude: [/node_modules/],
                loader: 'vue-loader'
            },
            {{/vue}}
            {
                test: /\.js$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')
                        }
                    }
                ]
            },
            { // SVG symbols to be made into a sprite SVG!
                test: /\.svg$/,
                include: path.resolve(__dirname, "Assets/svg/symbol/"),
                exclude: /node_modules/,
                use: [
                    { loader: 'svg-sprite-loader' },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { removeViewbox: false },
                                { removeDimensions: false },
                                { convertPathData: false },
                                { removeUselessStrokeAndFill: true }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({ filename: "[name].bundle.css", chunkFilename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].bundle.css' : '[name].bundle.css' }), // save the css as external files instead of bundling them into the javascripts
        {{#vue}}new vueLoaderPlugin(),{{/vue}}
        new cleanWebpackPlugin(path.resolve(__dirname, './Assets/bundled'),{
            exclude:  ['_README.md'],
            verbose:  true,
            dry: false}),
        new webpack.WatchIgnorePlugin([/node_modules/]) // turn off watcher for node_modules
    ],
    resolve: {
        alias: {
            {{#vue}}
            'vue': 'vue/dist/vue.js',
            '@Components': path.resolve(__dirname, 'Assets/vue/components'),
            {{/vue}}
            {{#router}}
            '@Vues': path.resolve(__dirname, 'Assets/Vue/Views'),
            {{/router}}
            '@': path.join(__dirname, 'Assets'),
            '@Views': path.resolve(__dirname, 'Views')
        },
        extensions: ['*', '.js', {{#vue}}'.vue',{{/vue}} '.json']
    },
    // performance: {
    //     hints: false
    // },
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map'
}
