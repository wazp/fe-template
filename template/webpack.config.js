var path = require('path'),
    glob = require('glob'),
    fs = require('fs')
    webpack = require('webpack'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    vueFiles = glob.sync('./Assets/vue/OnDemand/*.vue'),
    vueImports = './Assets/Scripts/vueImports.js';

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
        publicPath: '../Assets/bundled/', // IMPORTANT! Should be made absolute when not looking at the demos in ./html!
        path: path.resolve(__dirname, './Assets/bundled'),

    },
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: [/node_modules/],
                loader: extractTextPlugin.extract('css-loader!postcss-loader!less-loader!import-glob-loader')
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
                exclude: [/node_modules/],
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
        new extractTextPlugin('[name].bundle.css'), // save the css as external files instead of bundling them into the javascripts
        new webpack.WatchIgnorePlugin([/node_modules/]) // turn off watcher for node_modules
    ],
    resolve: {
        alias: {
            {{#vue}}
            'vue': 'vue/dist/vue.js',
            '@Components': path.resolve(__dirname, 'Assets/vue/components'),
            {{/vue}}
            '@': path.join(__dirname, 'Assets'),
            '@Views': path.resolve(__dirname, 'Views'),
        },
        extensions: ['*', '.js', {{#vue}}'.vue',{{/vue}} '.json']
    },
    // performance: {
    //     hints: false
    // },
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
