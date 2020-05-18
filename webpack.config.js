const path = require("path");

module.exports = {
  mode: "development",
  // mode: "production",
  devtool: false,
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-out.js",
  },
  optimization: {
    // minimize: true,
    // concatenateModules: true,
    usedExports: true,
    sideEffects: true,
  },
};
