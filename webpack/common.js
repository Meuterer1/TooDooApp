const path = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path(__dirname, "..", "src", "index.jsx"),
  },
  output: {
    filename: "bundle.js",
    path: path(__dirname, "..", "build"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      fs: false,
      os: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, "..", "client", "build", "index.html"),
    }),
  ],
};
