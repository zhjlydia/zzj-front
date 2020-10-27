const fs = require('fs')
const path = require('path')
const express = require('express')
const resolve = file => path.resolve(__dirname, file)

const template = fs.readFileSync(resolve('./public/index.ssr.html'), 'utf-8')
const serverBundle = require(resolve('./dist/vue-ssr-server-bundle.json'))
const clientManifest = require(resolve('./dist/vue-ssr-client-manifest.json'))

const proxy = require('http-proxy-middleware');//引入代理中间件

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle,{
    runInNewContext: false, // 推荐
    template,
    clientManifest
});

const app = express()

/**
 * proxy middleware options
 * 代理跨域配置
 * @type {{target: string, changeOrigin: boolean, pathRewrite: {^/api: string}}}
 */
var options = {
  target: 'http://api.zhouzhoujiang.com', // target host
  changeOrigin: true,               // needed for virtual hosted sites
  pathRewrite: {
    '^/api': ''
  }
};

var exampleProxy = proxy(options);
app.use('/api', exampleProxy);

// 设置静态资源目录
app.use(express.static(__dirname + '/dist'))

app.get("*", async (req, res) => {
  try {
      const context = {
          url: req.url,
          title: 'ssr test'
      }
      console.log(context)
    const html = await renderer.renderToString(context); // 之前接收vue实例，现在接收上下文
    res.end(html);
  } catch (error) {
    console.log(error);
    res.status(500).send("服务器内部错误");
  }
});
  
app.listen(8080);