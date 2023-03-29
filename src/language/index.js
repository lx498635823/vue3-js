import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    // something vue-i18n options here ...
    locale: 'cn',
    //在这里需要配置 legacy: false，不然会报错：Not available in legacy mode (at message-compiler.esm-bundler.js:54:19)
    legacy: false,
    messages:{
        en:require("./en.js"),
        cn:require("./cn.js")
    }
  })
export default  i18n;