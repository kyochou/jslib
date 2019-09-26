module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard',
        // use prettier's rules first
        // https://prettier.io/
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019,
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': 'error',
        //强制使用单引号
        quotes: ['error', 'single'],
        //强制不使用分号结尾
        semi: ['error', 'never'],
    },
}
