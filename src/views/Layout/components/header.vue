<template>
    <div id="header">
        <div class="collapsed-button" @click="collapsedButtom()">
            <svg-icon icon="collapsed"></svg-icon>
        </div>
        <div class="header-menu">
            <a-dropdown>
                <a-avatar class="user" style="background-color: #1890ff" @click.prevent>
                    <template template  class="touxiang"><UserOutlined /></template>
                </a-avatar>
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="0">
                            <div class="menu-item">username</div>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="1">
                            <div class="menu-item menu-lang">
                                <span v-for="langs in lang" :key="langs.value" @click="qiehuan(langs.value)" :class="{'current' : lang_current==langs.value}">{{ langs.label }}</span>
                            </div>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="3" >
                            <div class="menu-item">{{ $t('header_menu.logout') }}</div>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
import { ref,reactive,toRefs,onBeforeMount,onMounted,getCurrentInstance} from 'vue'
//图标
import { DownOutlined,UserOutlined  } from '@ant-design/icons-vue';
//语言
import { useI18n } from "vue-i18n"
export default {
    name: 'Header',
    components: {
        UserOutlined,
    },
    setup() {
        const { emit } = getCurrentInstance();
        
        const data = reactive({
            lang:[
                { label:'中文', value:'cn'},
                { label:'En', value:'en'}
            ],
            lang_current:'cn'
        })
        //向父组件传递开关侧边栏参数
        const collapsedButtom = ()=>{
            // 向父组件传值，第一个为参数名父组件标签用@参数名触发方法，第二个为参数可以是json
            emit("collapsed","123")
        }
        //扩展语言
        const { locale } =useI18n();
        const qiehuan = (lang)=>{
            locale.value=lang
            data.lang_current=lang
        }
        onBeforeMount(() => {
        })
        onMounted(() => {
        })
        const refData = toRefs(data);
        return {
            ...refData,
            qiehuan,collapsedButtom
        }

    }
};
</script>
<style lang="scss" scoped>
.header{
    padding: 0 20px ;
    height: 64px;
}
.header-menu{
    /* 右对齐 */
    float: right;
    
}
.menu-item{
    padding: 0 20px;
    font-size: 14px;
    font-family: '黑体';
    color: #333333;
}
.menu-lang{
    color:#aeaeae;
    span{ margin-right:10px };
    .current{ color:#333333 }
}
.touxiang{
    margin-bottom: 40px;
}
.user{
    margin-right: 20px;
    margin-top: 15px
}
.collapsed-button{
    float: left;
    cursor:pointer;
    font-size: 20px;
    padding-left: 20px;
}
</style>