import services from '@/utils/request.js';

export function select(params){
    return services.request({
        // `url` 是用于请求的服务器 URL
        //开发环境中VUE_APP_LOGIN这个地址要设置为空
        url: process.env.VUE_APP_LOGIN +'/user/',
        // `method` 是创建请求时使用的方法
        method: 'get', // default
        // get请求使用
        // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
        params
    })
}


//第二个接口样例
export function getInFo(data){
    return services.request({
        // `url` 是用于请求的服务器 URL
        url: process.env.VUE_APP_LOGIN +'/info/',
        // `method` 是创建请求时使用的方法
        method: 'post', // default
        // `data` 是作为请求主体被发送的数据
        // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
        // 在没有设置 `transformRequest` 时，必须是以下类型之一：
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - 浏览器专属：FormData, File, Blob
        // - Node 专属： Stream
        data
    })
}
//多个请求域名的写法
export function login(data){
    return services.request({
        // `url` 是用于请求的服务器 URL
        //多地址的情况
        //第一个为正式和测试环境的变量地址，开发环境中要设置为空
        //第二个参数为开发环境中的标志位，如果有将前面的地址替换为vueconfig中设置的跨域地址
        url: process.env.VUE_APP_LOGIN + process.env.VUE_APP_FLAG +'/login/',
        // `method` 是创建请求时使用的方法
        method: 'post', // default
        // `data` 是作为请求主体被发送的数据
        // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
        // 在没有设置 `transformRequest` 时，必须是以下类型之一：
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - 浏览器专属：FormData, File, Blob
        // - Node 专属： Stream
        data
    })
}