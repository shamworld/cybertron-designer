<template>
  <a-tabs
    v-model:activeKey="activeKey"
    class="panel-tabs"
    tab-position="right"
    :tab-bar-style="{ color: '#a9a8b8', border: '1px solid #373d57' }"
  >
    <a-tab-pane key="1" tab="组件库">
      <component-panel></component-panel>
    </a-tab-pane>
    <a-tab-pane key="2" tab="组件树">
      <component-tree></component-tree>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ComponentPanel from './component-panel.vue';
import ComponentTree from './component-tree.vue';

export default defineComponent({
  name: 'panel-area',
  components: { ComponentPanel, ComponentTree },
  setup() {
    return {
      activeKey: ref('1')
    };
  }
});
</script>

<style scoped lang="less">
.panel-tabs {
  :deep(.ant-tabs-right-content) {
    border-right: 1px solid #373d57;
    padding-right: 0;
    height: 100%;
  }
  :deep(.ant-tabs-bar) {
    height: auto;
  }
}
</style>
