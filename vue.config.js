const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法自动检测
  lintOnSave: false,
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
