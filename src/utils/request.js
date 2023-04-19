import axios from 'axios'
import { message } from 'ant-design-vue'

const service = axios.create({
    //开发环境标记替换
    //测试和生产环境在api中配置
    //如果有多个接口地址需要将baseURL设置为空，并将标记设置在api中
    baseURL: process.env.VUE_APP_FLAG,
    timeout: 5000,
    // headers:{'X-Custom-Header':'foobar'}
})
//引用的.env中的环境变量
console.log(process.env.VUE_APP_FLAG)
//添加请求拦截器
service.interceptors.request.use(function(config){
    //在发送请求之前做些什么
    return config
},function(error){
    //对请求错误做些什么
    return Promise.reject(error)
})

//添加响应拦截器
service.interceptors.response.use(function(response){
    //对响应数据做点什么
    // const data = response.data;
    //一般不为0调用失败（后端确定）
    // if(data.resCode != 0){
    //可以进行弹窗提醒等操作
    //message.info(data.message)
    // }else{
    //     return Promise.resolve(data)
    // }
    return response
},function(error){
    //对响应错误做些什么
    return Promise.reject(error)
})
export default service;