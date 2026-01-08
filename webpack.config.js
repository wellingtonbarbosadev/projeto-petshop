const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { use } = require("react")

module.exports = {
  entry: path(__dirname, "src", "main.js"),
  output: {
    path: path(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      favicon: path.resolve(__dirname, "src", "assets", "logo.svg")
    }),

    new CopyWebpackPlugin({
      patterns: {
        from: path.resolve(__dirname, "src", "assets"),
        to: path.resolve(__dirname, "dist" ,"src", "assets")
      },
    }),
  ],

  mode: "development",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port: 3050,
    liveReload: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "./node_modules"
      }
    ]
  }

}