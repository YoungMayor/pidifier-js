const { join } = require('path')

module.exports = {
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'PidifierJS',
    },
    devtool: 'source-map',
}