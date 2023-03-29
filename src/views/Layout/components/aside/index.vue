<template>
    <div>
      <h1 id="logo">
        <img :src="logo" alt="首钢京唐" style="width: 250px;" v-show="!collapsible">
        <img :src="logo_min" alt="首钢京唐" style="width: 80px;" v-show="collapsible">
      </h1>
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        @click="selectMenu"
        @openChange="openMenu"
        :inline-collapsed="collapsed"
      >
          <template v-for="item in routers" >
            
            <template v-if="!item.hidden">
                <!-- 一级 -->
                <a-menu-item v-if="hasOnlyChildren(item)" :key="item.path">
                    <router-link :to="item.children[0].path">
                      <span class="anticon">
                        <svg-icon :icon="item.meta && item.meta.icon" className="aside-svg"></svg-icon>
                      </span>
                      <span>
                        {{ item.children[0].meta && item.children[0].meta.title }}
                      </span>
                    </router-link>
                </a-menu-item>
                <!-- 子级 -->
                <Menu v-else :menu="item" :key="item.path"/>
            </template>
            
          </template>
      </a-menu>
    </div>
</template>

<script>
import { ref,reactive,toRefs,onBeforeMount,onMounted} from 'vue'
import { useRoute,useRouter } from 'vue-router';
//组件
import SvgIcon from '@/components/svgIcon'
import Menu from "./menu.vue"
export default {
    name: 'Aside',
    components:{ Menu },
    props:{
      collapsible:{
        type : Boolean,
        default : false
      }
    },
    setup() {
        //取出useRouter中的options内数据
        const { options } = useRouter();
        //路由
        const routers = options.routes;
        console.log(routers)
        //数据
        const data = reactive({
          selectedKeys: localStorage.getItem("selectedKeys")?[localStorage.getItem("selectedKeys")] : [],
          openKeys: localStorage.getItem("openKeys")?JSON.parse(localStorage.getItem("openKeys")) : [],
          logo: require('@/assets/favicon.png'),
          logo_min: require('@/assets/favicon1.png'),
        })
        //检测是否只有一个子路由
        const hasOnlyChildren = (data)=>{
          //如果不存在子集
          if(!data.children){
            return false
          }
          //过滤隐藏的子集路由
          const routers = data.children.filter(item=>{
            // 判断子集中hidden属性是否为true，如果为true不返回数据，如果不为true则返回数据（filter方法会返回数组，也就是为true的那段数据）
            return item.children ? false : true;
          })
          if(routers.length === 1){
            return true
          }else{
            return false
          }
        }
        //选择菜单
        const selectMenu = ({item , key , keyPath})=>{
          console.log(key)
          data.selectedKeys=[key]
          localStorage.setItem("selectedKeys",data.selectedKeys)
        }
        //展开菜单
        const openMenu =(openKeys)=>{
          data.openKeys=openKeys
          localStorage.setItem("openKeys",JSON.stringify(openKeys))
        }
        onBeforeMount(() => {
        })
        onMounted(() => {
        })
        const refData = toRefs(data);
        return {
            ...refData,routers,
            selectMenu,openMenu,hasOnlyChildren
        }

    }
};
</script>
<style lang="scss" >
#logo{
  padding: 24px 0 20px;
  border-bottom: 1px solid black;
  text-align: center;
  img {
    display: inline-block;
  }
}
</style>