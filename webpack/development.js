module.exports = {
  devServer: {
    static: {
      directory: "./public",
    },
    compress: true,
    port: process.env.PORT || 3000,
    watchFiles: {
      paths: ["src/**/*"],
    },
    open: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.module\.(s(a|c)ss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(s(a|c)ss)$/,
        exclude: /\.module\.(s(a|c)ss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
