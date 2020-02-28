const path = require('path');

module.exports = (env, args) => ({
    resolve: { extensions: ['.ts', '.js'] },
    devtool: args.mode === 'development' ? 'source-map' : 'none',
    module: {
        rules: [{ test: /\.ts?$/, loader: 'ts-loader' }]
    },
    entry: {
        main: './BlazorCleave.ts',
    },

    output: {
        // Place output in wwwroot and export a top-level 'BlazorCleave' object
        path: path.join(__dirname, '..', 'wwwroot'),
        filename: 'BlazorCleave.js',
        libraryTarget: 'var',
        library: 'BlazorCleave',
        libraryExport: 'default'
    }
});