const merge=require('webpack-merge')
const path = require('path')
const nodeExternals=require('webpack-node-externals')
const baseConfig=require('./webpack.base.config.js')
const VueSSRServerPlugin=require('vue-server-renderer/server-plugin')
const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports=merge(baseConfig,{
    entry:resolve('src/entry-server.ts'),
    target:'node',
    devtool: 'source-map',
    output: {
        libraryTarget: 'commonjs2',
        filename:'service-bundle.js'
    },
    externals: nodeExternals({
        allowlist: /\.css$/
    }),
    plugins: [
        new VueSSRServerPlugin()
    ]
})