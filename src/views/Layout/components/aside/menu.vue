<template>
  <a-sub-menu :key="menu.path">
    <template #title>
      <span class="anticon">
        <svg-icon :icon="menu.meta && menu.meta.icon" className="aside-svg"></svg-icon>
      </span>
      <span>{{ menu.meta && menu.meta.title }}</span>
    </template>
    <template v-if="menu.children.length">
        <template v-for="item in menu.children">
          <!-- 去除子集隐藏的路由 -->
          <template v-if="!item.hidden">
              <!-- 无子集 -->
              <a-menu-item v-if="!item.children" :key="item.path" >
                  <router-link to="item.path">{{ item.meta && item.meta.title }}</router-link>
              </a-menu-item>
              <!-- 无限循环 -->
              <!-- 自己调自己不用引用 -->
              <Menu v-else :menu="item" :key="item.path"/>
          </template>
        </template>
        
    </template>
  </a-sub-menu>
</template>

<script>
import { ref,reactive,toRefs,onBeforeMount,onMounted} from 'vue'
import { object } from 'vue-types';
//组件
import SvgIcon from '@/components/svgIcon'
export default {
      name: 'Menu',
      props:{ 
        menu:{
            type: Object,  
            default:(()=>{})
        }
      },  
      setup() {
          const data = reactive({

          })
          onBeforeMount(() => {
          })
          onMounted(() => {
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>
<style scoped>
</style>