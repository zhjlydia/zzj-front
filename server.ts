
const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const resolve = file => path.resolve(__dirname, file)

const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('/path/to/template.html', 'utf-8')
const serverBundle = require('/path/to/vue-ssr-server-bundle.json')
const clientManifest = require('/path/to/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
})