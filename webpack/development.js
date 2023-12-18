module.exports = {
  devServer: {
    static: {
      directory: "./client/build",
      contentBase: __dirname + "/client/build/",
      watch: true,
    },
    port: process.env.PORT || 3000,
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
