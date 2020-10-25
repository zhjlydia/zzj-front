const fs = require('fs')
const path = require('path')
const express = require('express')
const resolve = file => path.resolve(__dirname, file)

const template = fs.readFileSync(resolve('./dist/index.html'), 'utf-8')
const serverBundle = require(resolve('./dist/vue-ssr-server-bundle.json'))
const clientManifest = require(resolve('./dist/vue-ssr-client-manifest.json'))

const renderer = require('vue-server-renderer').createRenderer(serverBundle,{
    runInNewContext: false, // 推荐
    template,
    clientManifest
});

const app = express()

app.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    res.end(html)
  })
})
  
app.listen(8080);