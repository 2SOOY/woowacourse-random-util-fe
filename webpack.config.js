const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    library: {
      name: "WoowaUtil",
      type: "umd",
    },
    clean: true,
  },
  resolve: {
    extensions: [".js"],
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};
