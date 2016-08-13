var path = require("path")

module.exports = {
  context: __dirname,
  entry: "./javascripts/main.js",
  output: {
        path: __dirname,
        filename: "bundle.js"
    },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
