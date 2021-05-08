<template>
  <div class="flex flex-col h-screen w-screen">
    <section class="flex-shrink-0 h-60 border-b border-border"></section>
    <section class="flex-shrink-0 body flex flex-grow">
      <div class="flex-shrink-0 component-panel border-border">
        <panel-area class="h-full"></panel-area>
      </div>
      <div class="flex-shrink-0 designer-canvas flex-grow">
        <editor-area :schema="schema"/>
      </div>
      <div class="flex-shrink-0 form-panel w-240 border-l border-border"></div>
    </section>
  </div>
</template>

<script lang="ts">
import ToolBar from './components/tool-bar.vue';
import PanelArea from './components/panel-area.vue';
import DesignerCanvas from './components/canvas.vue';
import EditorArea from './components/editor-area.vue';
import {getUUID} from 'ant-design-vue/es/vc-select/utils/commonUtil';
import WidgetType from '@/enum/schema/widget-type.enum';
import StyleValueUnit from '@/enum/style-value-unit';

export default {
  name: 'base',
  components: {
    ToolBar,
    PanelArea,
    EditorArea,
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
          style: [
            {
              name: 'background-color',
              value: '#fff',
              unit: StyleValueUnit.none
            },
            {
              name: 'min-height',
              value: '812',
              unit: StyleValueUnit.px
            }
          ]
        },
        children: []
      }
    };
  }
};
</script>

<style lang="less" scoped></style>
