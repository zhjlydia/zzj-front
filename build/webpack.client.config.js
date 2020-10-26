const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = merge(baseConfig, {
  target:'web',
  entry: resolve('src/entry-client.ts'),
  output: {
    filename: '[name].[hash].js',
    path: resolve('dist')
  },
  plugins: [
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:resolve('public/index.html')
    })
  ]
})