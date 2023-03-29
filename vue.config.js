const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法自动检测
  lintOnSave: false,
  //svg配置
  chainWebpack: config => {
    config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include.add(path.resolve('src/assets/svg')) //处理svg目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]',
        });
  },
  //
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  //打包目录
  outputDir: process.env.NODE_ENV === 'dist' ? '' : 'devDist',
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },
      scss:{
        additionalData: `@import "./src/style/main.scss";`
      },
    }
  }
});
