const path = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path(__dirname, "..", "src", "index.jsx"),
  },
  output: {
    filename: "[name].[contenthash:6].js",
    path: path(__dirname, "..", "build"),
    publicPath: "/client/build",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      stream: require.resolve("stream-browserify"),
      dns: require.resolve("dns.js"),
      util: require.resolve("util"),
      crypto: require.resolve("crypto-browserify"),
      child_process: false,
      http: require.resolve("http-browserify"),
      timers: require.resolve("timers-browserify"),
      url: require.resolve("url/"),
      buffer: require.resolve("buffer/"),
      process: require.resolve("process/browser"),
      zlib: require.resolve("browserify-zlib"),
      os: require.resolve("os-browserify/browser"),
      fs: false,
      os: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, "..", "public", "index.html"),
    }),
  ],
};
