import babel from 'rollup-plugin-babel'
import npm from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

export default {
    entry: 'test/main.js',
    dest: 'test/bundle.js',
    format: 'umd',
    plugins: [
        babel({presets: ['es2015-rollup']}),
        npm({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': "'production'"
        })
    ]
}
