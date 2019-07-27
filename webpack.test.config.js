var path = require("path");
module.exports = {
  entry: {
    android: "./src/test/sdk.test.ts",
  },
  output: {
    filename: 'sdk.test.js',
    path: path.resolve(__dirname, './out/test/')
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  mode: "development",
  devtool: "inline-source-map",
}