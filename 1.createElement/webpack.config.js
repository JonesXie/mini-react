const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  devServer: {
    port: 9527,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
      },
    ],
  },
  mode: "development",
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React",
    }),
  ],
};
