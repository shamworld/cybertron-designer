<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
export default {
  name: 'base',
  props: {

  },
  setup() {
    return {
      msg: '测试信息1',
    };
  },
  data() {
    return {
      msg: '基础信息',
    };
  }
};
</script>

<style scoped lang="less">

</style>
