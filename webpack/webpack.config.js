const webpack = require("webpack"); // eslint-disable-line no-unused-vars
const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    main: "./main.js",
    "pdf.worker": "pdfjs-dist/build/pdf.worker.entry",
  },
  mode: "none",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "./build/",
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    historyApiFallback: true, // respond to 404s with index.html
    host: 'localhost',
    hot: true, // enable HMR on the server
    port: 3000,
  },
};
