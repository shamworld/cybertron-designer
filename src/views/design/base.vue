<template>
  <div class="flex flex-col h-screen w-screen dark:bg-main-bg">
    <section class="h-60 border-b border-border"></section>
    <section class="body flex flex-grow">
      <div class="component-panel border-border">
        <panel-area class="h-full"></panel-area>
      </div>
      <div class="designer-canvas flex-grow"></div>
      <div class="form-panel w-240 border-l border-border"></div>
    </section>
  </div>
</template>

<script lang="ts">
import ToolBar from './components/tool-bar.vue';
import PanelArea from './components/panel-area.vue';

export default {
  name: 'base',
  components: {
    ToolBar,
    PanelArea
  },
  props: {},
  setup() {
    return {
      msg: '测试信息1'
    };
  },
  data() {
    return {
      msg: '基础信息'
    };
  }
};
</script>

<style lang="less" scoped></style>
