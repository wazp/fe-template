module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {},
        'postcss-color-rgba-fallback': {},
        'css-mqpacker': { sort: true },
        cssnano: {
            //reduceIdents: {
            //    keyframes: false // do not rename keyframes
            //},
            //discardUnused: {
            //    keyframes: false // do not remove unused keyframes
            //},
            //zindex: false
        }
    }
};