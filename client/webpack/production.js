const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  optimization: {
    //minimizer: [new OptimizeCssAssetsWebpackPlugin({})],
    minimizer: [new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.module\.(s(a|c)ss)$/,
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   {
        //     loader: "css-loader",
        //     options: {
        //       modules: {
        //         localIdentName: "[local",
        //       },
        //     },
        //   },
        //   {
        //     loader: "saas-loader",
        //     options: {
        //       sourceMap: true,
        //     },
        //   },
        // ],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
  plugins: [
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "style.[contenthash:6].css",
    //   chunkFilename: "style.[contenthash:6].css",
    // }),
    new MiniCssExtractPlugin(),
  ],
};
