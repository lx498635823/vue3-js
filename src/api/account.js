import services from '@/utils/request.js';

export function select(params){
    return services.request({
        // `url` 是用于请求的服务器 URL
        url: '/user/',
        // `method` 是创建请求时使用的方法
        method: 'get', // default
        // get请求使用
        // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
        params
    })
}

export function login(data){
    return services.request({
        // `url` 是用于请求的服务器 URL
        url: process.env.VUE_APP_ACCTION_APIURL+'/login/',
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
//第二个接口样例
export function getInFo(data){
    return services.request({
        // `url` 是用于请求的服务器 URL
        url: process.env.VUE_APP_FLAG_INFO+'/info/',
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
