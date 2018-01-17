const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.js", // bundle's entry point
  output: {
      path: path.resolve(__dirname, 'dist'), // output directory
      filename: "bundle.js" // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
              'stage-0'
            ]
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};