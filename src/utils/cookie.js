//导入js-cookie
//Cookies.set('token',123123) Cookies.get('token') Cookies.remove('token)
import Cookies from "js-cookie"
const token = 'token'

export function setToken(value){
    Cookies.set(token,value)
}

export function getToken(){
    return Cookies.get(token)
}

export function removeToken(){
    Cookies.remove(token)
}