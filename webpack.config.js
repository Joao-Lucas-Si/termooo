'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './static/scripts/main.ts',
  watch: true,
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/scripts'),
  },
  // devServer: {
  //   static: path.resolve(__dirname, 'dist'),
  //   port: 8080,
  //   hot: true
  // },
  // plugins: [
  //   new miniCssExtractPlugin()
  // ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(scss)$/,
      //   use: [
      //     {
      //       loader: miniCssExtractPlugin.loader
      //     },
      //     {
      //       // Interprets `@import` and `url()` like `import/require()` and will resolve them
      //       loader: 'css-loader'
      //     },
      //     {
      //       // Loader for webpack to process CSS with PostCSS
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: [
      //             autoprefixer
      //           ]
      //         }
      //       }
      //     },
      //     {
      //       // Loads a SASS/SCSS file and compiles it to CSS
      //       loader: 'sass-loader'
      //     }
      //   ]
      // }
    ]
  }
}