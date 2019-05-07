const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    background: "./src/background.js",
    popup: "./src/popup.jsx"
  },
  output: {
    filename: "[name].js"
  },
  mode: "development",
  resolve: {
    extensions: [".jsx", ".js"]
  },
  devServer: {
    contentBase: __dirname + "public",
    compress: true,
    watchContentBase: true,
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      {
        include: __dirname + "/src",
        loader: "babel-loader",
        test: /\.jsx?$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/popup.html",
      filename: "popup.html",
      inject: true,
      chunks: ["popup"]
    }),
    new CopyPlugin([{ from: "manifest.json", to: "." }]),
    new webpack.HotModuleReplacementPlugin()
  ]
};
