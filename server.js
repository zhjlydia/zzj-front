const fs = require('fs')
const path = require('path')
const express = require('express')
const resolve = file => path.resolve(__dirname, file)

const template = fs.readFileSync(resolve('./public/index.ssr.html'), 'utf-8')
const serverBundle = require(resolve('./dist/vue-ssr-server-bundle.json'))
const clientManifest = require(resolve('./dist/vue-ssr-client-manifest.json'))

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle,{
    runInNewContext: false, // 推荐
    template,
    clientManifest
});

const app = express()

app.get("*", async (req, res) => {
  try {
      const context = {
          url: req.url,
          title: 'ssr test'
      }
    // console.log(req.url);
    const html = await renderer.renderToString(context); // 之前接收vue实例，现在接收上下文
    console.log(html);
    res.send(html);
  } catch (error) {
    console.log(error);
    res.status(500).send("服务器内部错误");
  }
});
  
app.listen(8080);