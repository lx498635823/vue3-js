<template>
   <div class="login">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="account_form"
        :rules="rules_form"
        @finish="handleFinish"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input v-model:value="account_form.username" type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item name="password">
          <label>密码</label>
          <a-input-password v-model:value="account_form.password"  utocomplete="off" placeholder="请输入密码" />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input-password v-model:value="account_form.passwords" placeholder="请再次输入密码" utocomplete="off" />
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="14"><a-input maxlength="6" v-model="account_form.code" type="text" utocomplete="off" /></a-col>
            <a-col :span="10"><a-button @click="getCode" type="primary" block :loading="button_loading" :disabled="button_disabled">{{button_text}}</a-button></a-col>
          </a-row>
          
        </a-form-item>

        <a-form-item>
          <Captcha />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            注册
          </a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> | 
        <router-link to="/">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
//导入所有方法通过ver.方法名调用
// import * as ver from "../../utils/check.js"
//导入方法修改别名（与本地方法重名）
import { checkUsername as checkUsernames,checkPassword as checkPassworded } from "../../utils/check.js"
import { onMounted, reactive, ref, toRefs } from "vue";
import Captcha from "../../components/Captcha/index.vue"
export default {
  name: "Login",
  components:{ Captcha },
  setup(props) {
    let checkUsername = async (_rule, value)=>{
      
      if (value === '') {
        return Promise.reject('请输入用户名');
      }else if(!checkUsernames(value)){
        return Promise.reject('请输入8位数字的用户名');
      }else{
        return Promise.resolve();
      }
    }

    let checkPassword = async (_rule, value)=>{
      const passwords =formConfig.account_form.passwords
      if (value === '') {
        return Promise.reject('请输入密码');
      }else if(!checkPassworded(value)){
        return Promise.reject('请输入正确的密码');
      }else if(passwords && value && (passwords !==value) ){
        return Promise.reject('两次密码不一致');
      }else{
        return Promise.resolve();
      }
    }

    let checkPasswords = async (_rule, value)=>{
      const password =formConfig.account_form.password
      if (value === '') {
        return Promise.reject('请输入密码');
      }else if(!checkPassworded(value)){
        return Promise.reject('请输入正确的密码');
      }else if(password && value && (password !==value) ){
        return Promise.reject('两次密码不一致');
      }else{
        return Promise.resolve();
      }
    }

    const formConfig = reactive ({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: {span: 14 },
     },
     account_form:{
      username:"",
      password:"",
      passwords:"",
      code:""
     },
     rules_form:{
      username:[{ required: true, validator: checkUsername, trigger: 'change',}],
      password:[{ required: true, validator: checkPassword, trigger: 'change',}],
      passwords:[{ required: true, validator: checkPasswords, trigger: 'change',}],
     },
     button_text:"获取验证码",
     button_loading:false,
     button_disabled:false,
     sec:60,
     timer:""
    })
    
    const data =toRefs(formConfig)
    const getCode = ()=>{
      //判断定时器是否存在
      if(formConfig.timer){
        clearInterval(formConfig.timer)
      }
      //倒计时
      formConfig.timer=setInterval(()=>{
        const s = formConfig.sec--
        formConfig.button_text=`${formConfig.sec}秒`
        if(s<=0){
          clearInterval(formConfig.timer)
          formConfig.button_text='重新获取'
        }
      },1000)
    }
    const handleFinish = (value)=>{
      console.log(value)
    }
    onMounted(()=>{
      
    })
   return {
      //reactive
      ...data,
      //function
      handleFinish,getCode
      
    }; 
  },
};
</script>
<style lang="scss">
@import "./register.scss";
</style>