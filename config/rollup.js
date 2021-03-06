var babel = require('rollup-plugin-babel')

var pkg = require('../package.json')

var version = pkg.version

var banner = `/*!
 * ${pkg.name} ${version} (https://github.com/kyochou/lib)
 * API https://github.com/kyochou/lib/blob/master/doc/api.md
 * Copyright 2017-${new Date().getFullYear()} kyochou. All Rights Reserved
 * Licensed under MIT (https://github.com/kyochou/lib/blob/master/LICENSE)
 */
`

function getCompiler() {
    return babel({
        babelrc: false,
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers:
                            'last 2 versions, > 1%, ie >= 8, Android >= 4, iOS >= 6, and_uc > 9',
                        node: '0.10',
                    },
                    modules: false,
                    loose: false,
                },
            ],
        ],
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    helpers: false,
                    regenerator: false,
                },
            ],
        ],
        runtimeHelpers: true,
        exclude: 'node_modules/**',
    })
}

exports.name = 'k_'
exports.banner = banner
exports.getCompiler = getCompiler
