var path = require("path");
module.exports = {
    entry: "./src/Index.ts",
    output: {
        filename: 'mgsdk.js',
        path: path.resolve(__dirname, './out')
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
}