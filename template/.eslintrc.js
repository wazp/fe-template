module.exports = {
    'root': true,
    'parser':'babel-eslint',
    'parserOptions': {
        'sourceType': 'module'
    },
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'standard',
    'rules': {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': [2, 4], // 4 spaces - VS defaults
        'no-tabs': 1, // no tabs - VS defaults
        'space-before-function-paren': 0, // VS Defaults
        'space-before-blocks': 1, // VS Defaults
        'object-shorthand': 1
    },
    'plugins': [
        'html'
    ]
  }
  