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
   //‘/’为绝对路径打包可能会出现白屏所以改为‘./’相对路径
   publicPath : process.env.NODE_ENV === 'production' ? '' : './',
   //构建项目生成目录
   outputDir : process.env.NODE_ENV === 'production' ? 'dist' : 'dist-test',
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
  },
  devServer:{
    open:true, //是否运行项目后自动打开网页
    host:'0.0.0.0', //可以让外部访问（同局域网其他人可以访问）
    port:8000,
    proxy:{
      [process.env.VUE_APP_FLAG]:{ //引用全局变量
        target: process.env.VUE_APP_PATH,
        ws:false, //是否开启websocket
        changeOrigin:true, //是否开吃跨域
        pathRewrite:{ //路径重写
          [`^${process.env.VUE_APP_FLAG}`]:''  //查找开头为/api的字符替换成空字符串并将api文件夹中调用的url拼接到target地址后
        }
      },
      // 第二个跨域接口但是request 中baseurl设置为空，直接在api中设置对应全局变量实现一个request对应不同域名的跨域
      [process.env.VUE_APP_FLAG_INFO]:{ //引用全局变量
        target: process.env.VUE_APP_PATH,
        ws:false, //是否开启websocket
        changeOrigin:true, //是否开吃跨域
        pathRewrite:{ //路径重写
          [`^${process.env.VUE_APP_FLAG_INFO}`]:''  //查找开头为/api的字符替换成空字符串并将api文件夹中调用的url拼接到target地址后
        }
      },
      // 未引用全局变量的写法
      // '/devApi':{
      //   target:'http://127.0.0.1',
      //   ws:false, //是否开启websocket
      //   changeOrigin:true, //是否开吃跨域
      //   pathRewrite:{ //路径重写
      //     "^/devApi":''  //查找开头为/api的字符替换成空字符串并将qpi文件夹中调用的url拼接到target地址后
      //   }
      // },
      // '/foo':{
      //   target:'<other_url>'
      // }
    }
  }
});
