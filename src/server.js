const Vue = require('vue')
  
const fs = require('fs')
const path = require('path')
const express = require('express')
const resolve = file => path.resolve(__dirname, file)

const template = fs.readFileSync(resolve('./dist/index.html'), 'utf-8')
const serverBundle = require(resolve('./dist/vue-ssr-server-bundle.json'))
const clientManifest = require(resolve('./dist/vue-ssr-client-manifest.json'))

const renderer = require('vue-server-renderer').createRenderer(serverBundle,{
    template,
    clientManifest
});

const app = express()

server.get('*', (req, res) => {
    const app = new Vue({
      data: {
        url: req.url
      },
      template: `<div>访问的 URL 是： {{ url }}</div>`,
    });
  
    renderer
    .renderToString(app, context, (err, html) => {
      console.log(html);
      if (err) {
        res.status(500).end('Internal Server Error')
        return;
      }
      res.end(html);
    });
  })
  
  server.listen(8080);