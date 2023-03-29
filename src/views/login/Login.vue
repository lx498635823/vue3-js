<template>
   <div class="login">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
      >
        <a-form-item>
          <label>用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password" utocomplete="off" />
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
import { onMounted, reactive, ref, toRefs } from "vue";
import Captcha from "../../components/Captcha/index.vue"
export default {
  name: "Login",
  components:{ Captcha },
  setup(props) {
    const number =ref(10)
    console.log(number.value)
    number.value=20
    console.log(number.value)
    const formConfig = reactive ({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: {span: 14 },
     }
    })
    
    const data =toRefs(formConfig)
    onMounted(()=>{
      
    })
   return {
      ...data,
    }; 
  },
};
</script>
<style lang="scss">
@import "./login.scss";
</style>