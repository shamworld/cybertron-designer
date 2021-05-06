<template>
  <p :style="curStyle">{{ content }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import StyleValueUnit from '@/enum/style-value-unit';
import { convertSchemaToStyle } from '@/util';
import WidgetType from '@/enum/schema/widget-type.enum';

const TextWidget = defineComponent({
  name: 'text-widget',
  props: {
    content: {
      type: String,
      default: '文本控件'
    },
    id: String,
    type: WidgetType,
    style: {
      type: Array,
      default: [
        {
          name: 'width',
          value: 'auto',
          unit: StyleValueUnit.none
        },
        {
          name: 'height',
          value: 20,
          unit: StyleValueUnit.px
        },
        {
          name: 'fontWeight',
          value: 600,
          unit: StyleValueUnit.none
        },
        {
          name: 'lineHeight',
          value: 20,
          unit: StyleValueUnit.px
        },
        {
          name: 'color',
          value: '#f00',
          unit: StyleValueUnit.none
        },
        {
          name: 'textAlign',
          value: 'center',
          unit: StyleValueUnit.none
        }
      ]
    }
  },
  computed: {
    curStyle() {
      return convertSchemaToStyle(this.style);
    }
  }
});
export default TextWidget;
</script>

<style scoped></style>
