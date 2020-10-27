const merge=require('webpack-merge')
const path = require('path')
const nodeExternals=require('webpack-node-externals')
const baseConfig=require('./webpack.base.config.js')
const VueSSRServerPlugin=require('vue-server-renderer/server-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports=merge(baseConfig,{
    target:'node',
    devtool: '#source-map',
    entry:resolve('src/entry-server.ts'),
    
    output: {
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
        allowlist: /\.css$/
    }),
    plugins: [
        new VueSSRServerPlugin()
    ]
})