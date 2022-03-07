const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'assets',
  publicPath: './',
  outputDir: 'dist',
  runtimeCompiler: true,
  indexPath: 'index.html'
})
