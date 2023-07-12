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
        <a-form-item name="username" ref="username">
          <label>用户名</label>
          <a-input v-model:value="account_form.username" type="text" :disabled="input_diabled.username" autocomplete="off" @change="() => {$refs.username.onFieldChange()}"  />
        </a-form-item>

        <a-form-item name="password" ref="pws"> 
          <label>密码</label>
          <a-input-password v-model:value="account_form.password" placeholder="请输入密码" @change="() => {$refs.pws.onFieldChange()}" />
        </a-form-item>

        <!-- <a-form-item>
          <Captcha />
        </a-form-item> -->

        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> | 
        <a href="" class="color-white">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
// antdesign
import { message } from 'ant-design-vue';
// getCurrentInstance获取所有注册的组件实例（vue3中用于获取定义的全局组件，重点关注方法中的ctx）
import { onMounted, reactive, ref, toRefs, getCurrentInstance } from "vue";
// 导入验证类的方法
import { checkUsername as username, checkPassword as password } from "@/utils/check";
//登录
import { login } from "@/api/account.js"
// 路由
import { useRouter } from "vue-router";
import Captcha from "../../components/Captcha/index.vue"
export default {
  name: "Login",
  components:{ Captcha },
  setup(props) {
    // proxy类似于vue2.0中的this
    const { proxy } = getCurrentInstance();
    const checkUsername = async (rule, value, callback) => {
      if (!value) {
        dataItem.disabled_code_button = true;
        return Promise.reject('请输入用户名');            //不存在的情况
      }else if(!username(value)){
        dataItem.disabled_code_button = true;
        return Promise.reject('请输入11位数字的手机号');  //手机号错误的情况
      }else{
        // callback();
        // checkUsernameFn();
        dataItem.disabled_code_button = false;
        return Promise.resolve();
      }
    };
    /** 检验密码 */
    const checkPassword = async (rule, value, callback) => {
      const passwords = formConfig.account_form.passwords;
      if (!value) {
        return Promise.reject('请输入密码');            //不存在的情况
      }else if(!password(value)){
        return Promise.reject('请输入6~20位的，数字+英文');  //密码错误的情况
      }else{
        // callback();
        return Promise.resolve();
      }
    };
    // from表单
    const formConfig = reactive({  // 类似于JSON对象的语法
      layout: {
        labelCol: { span: 10 },
        wrapperCol: { span: 14 },
      },
      account_form: {
        username: "",
        password: ""
      },
      input_diabled: {
        username: false
      },
      rules_form: {
        username: [{ validator: checkUsername, trigger: 'change' }],
        password: [{ validator: checkPassword, trigger: 'change' }]
      },
      
    })
    // data
    const dataItem = reactive({})
    const form = toRefs(formConfig);
    const data = toRefs(dataItem);0

    const number =ref(10)
    console.log(number.value)
    number.value=20
    console.log(number.value)
    
    onMounted(()=>{
      
    })
   return {
      ...data,
      ...form,
    }; 
  },
};
</script>
<style lang="scss">
@import "./login.scss";
</style>