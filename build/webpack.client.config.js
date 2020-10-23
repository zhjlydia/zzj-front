const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = merge(baseConfig, {
  target:'web',
  entry: resolve('src/entry-client.ts'),
  output: {
    filename: '[name].[hash].js',
    path: resolve('dist')
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.VUE_ENV': '"client"'
    }),
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin()
  ],
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "manifest",
                chunks: "initial",
                minChunks: 2
            }
        }
    }
  }
})