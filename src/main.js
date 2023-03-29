import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
//中英文切换
import Vuei18n from './language/index.js'
// const i18n = createI18n({
//     // something vue-i18n options here ...
    
//   })
//svg全局组件
import SvgIcon from '@/components/svgIcon/index.vue'
//svg文件解析
import './js/svg.js'
createApp(App).use(store).use(router).use(Antd).use(Vuei18n)
// 引入全局组件使用名称和引用名称
.component("svg-icon",SvgIcon).mount("#app");
