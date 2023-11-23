const webpack = require("webpack"); // eslint-disable-line no-unused-vars
const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    main: "./main.js"
  },
  mode: "none",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "./build/",
    filename: "[name].bundle.js",
  },
  devServer: {
    static: {
      directory: __dirname
    },
    compress: true,
    historyApiFallback: true, // respond to 404s with index.html
    host: 'localhost',
    port: 3000,
  },
};
