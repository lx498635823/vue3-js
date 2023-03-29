<template>
  <a-layout id="layout-main" >
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="255" theme="light">
      <LayoutAside :collapsible="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <!-- 接收父组件emit传值并调用对应方法获取参数 -->
        <LayoutHeader @collapsed="handlerCollasped"/>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      <LayoutMaine />
      </a-layout-content>
    </a-layout>
    
    
    
  </a-layout>
</template>

<script>
import { ref,reactive,toRefs,onBeforeMount,onMounted} from 'vue';
import LayoutAside from './components/aside/index.vue';
import LayoutHeader from './components/header.vue';
import LayoutMaine from './components/main.vue';
export default {
    name: 'Layout',
    components:{ LayoutAside,LayoutHeader,LayoutMaine },
      setup(props) {
          const data = reactive({
            selectedKeys:['1'],
            collapsed: false,
          })
          //获取子组件传递过来的菜单状态
          const handlerCollasped = (value)=>{
            console.log(value)
            data.collapsed = !data.collapsed
          }
          onBeforeMount(() => {
          })
          onMounted(() => {
          })
          const refData = toRefs(data);
          return {
              ...refData,
              // ...toRefs(data)
              handlerCollasped
          }
      }
  };
</script>
<style lang="scss" >
  #layout-main{
    height: 100vh;
  }
</style>