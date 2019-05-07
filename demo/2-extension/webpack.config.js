const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    popup: "./src/popup.jsx"
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  mode: "development",
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
    new CopyPlugin([{ from: "manifest.json", to: "." }])
  ]
};
