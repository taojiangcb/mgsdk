var path = require("path");
module.exports = {
    entry: { mgsdk: "./src/index.ts" },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './out')
    },

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    mode: "development",
    //devtool: "inline-source-map",
}