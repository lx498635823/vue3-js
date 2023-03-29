<template>
  <svg class="svg-class" :class="className">
    <use :href="'#icon-'+icon"></use>
  </svg>
</template>

<script>
export default {
    name: 'svgIcon',
    props: {
        icon:{
            type: String,
            default:""
        },
        className: {
            type: String,
            default: ""
        }
    },
    
  };
</script>
<style lang="scss" scoped>

</style>