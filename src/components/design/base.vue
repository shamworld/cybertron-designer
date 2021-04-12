<template>
  <tool-bar></tool-bar>
</template>

<script lang="ts">
import ToolBar from '@/components/design/tool-bar.vue';

export default {
  name: 'base',
  components: {
    'tool-bar': ToolBar,
  },
  props: {},
  setup() {
    return {
      msg: '测试信息1',
    };
  },
  data() {
    return {
      msg: '基础信息',
    };
  },
};
</script>

<style lang="less" scoped>

</style>
