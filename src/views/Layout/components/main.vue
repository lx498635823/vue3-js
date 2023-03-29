<template>
    <div>显示区</div>
</template>

<script>
import { ref,reactive,toRefs,onBeforeMount,onMounted} from 'vue'
export default {
    name: 'Main',
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