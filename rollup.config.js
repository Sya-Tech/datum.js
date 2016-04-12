import babel from 'rollup-plugin-babel'
import npm from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs'
import env from 'rollup-plugin-env'
import uglify from 'rollup-plugin-uglify'

export default {
    entry: 'src/index.js',
    dest: 'index.js',
    format: 'umd',
    plugins: [
        babel(),
        npm({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': "'development'"
        })
    ]
};
