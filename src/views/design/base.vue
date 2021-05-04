<template>
  <div class="flex flex-col h-screen w-screen">
    <section class="h-60 border-b border-border"></section>
    <section class="body flex flex-grow">
      <div class="component-panel border-border">
        <panel-area class="h-full"></panel-area>
      </div>
      <div class="designer-canvas flex-grow">
        <DesignerCanvas
          class="w-375 h-812 dark:border border dark:border-border mx-auto my-20"
          :schema="schema"
        ></DesignerCanvas>
      </div>
      <div class="form-panel w-240 border-l border-border"></div>
    </section>
  </div>
</template>

<script lang="ts">
import ToolBar from './components/tool-bar.vue';
import PanelArea from './components/panel-area.vue';
import DesignerCanvas from './components/canvas.vue';
import { getUUID } from 'ant-design-vue/es/vc-select/utils/commonUtil';
import WidgetType from '@/enum/schema/widget-type.enum';

export default {
  name: 'base',
  components: {
    ToolBar,
    PanelArea,
    DesignerCanvas
  },
  props: {},
  setup() {
    return {
      schema: {
        id: getUUID(),
        type: WidgetType.container,
        name: '新建容器',
        desc: '新建容器，页面的根节点',
        props: {
          style: {
            backgroundColor: '#fff'
          }
        },
        children: []
      }
    };
  }
};
</script>

<style lang="less" scoped></style>
