import Router from "./index.js";
//cookies
import { getToken } from "@/utils/cookie.js";

Router.beforeEach((to,form,next)=>{
    //即将跳转
    console.log(to)
    //跳转前页面
    console.log(form)
    //确定跳转方法 ,如果有参数则会继续跳转
    // console.log(next())
    next()
    // if(getToken()){
    //     next()
    // }else{
    //     //判断是否进入登录页
    //     if(to.name=="Login"){
    //         next()//确认进入当前页面
    //     }else{
    //         next({name : 'Login'})//进入login并进行路由拦截判断
    //     }
        
    // }
})