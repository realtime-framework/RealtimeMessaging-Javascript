module.exports = [{
  entry: {
    "ortc-umd": "./ortc.umd.js"
  },
  output: {
    path: "dist",
    filename: "[name]-min.js",
    libraryTarget: "umd",
    library: "[name]"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel"
      }
    ]
  }
}]