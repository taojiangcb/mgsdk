var path = require("path");
module.exports = {
  entry: "./src/test/android.test.ts",
  output: {
    filename: 'bdd.test.js',
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
}
