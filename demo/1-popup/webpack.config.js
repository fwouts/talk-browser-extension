const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        include: __dirname + "/src",
        loader: "babel-loader",
        test: /\.jsx?$/
      }
    ]
  },
  entry: {
    popup: "./src/popup.jsx"
  },
  output: {
    filename: "[name].js"
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/popup.html",
      inject: true,
      chunks: ["popup"]
    })
  ]
};
