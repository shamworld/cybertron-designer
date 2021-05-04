<template>
  <div class="w-60 h-40 border-dashed" :style="curStyle"></div>
</template>

<script>
import {defineComponent} from 'vue';
import StyleValueUnit from '@/enum/style-value-unit';
import {convertSchemaToStyle} from '@/util';

const ContainerWidget = defineComponent({
  name: 'container',
  props: {
    style: {
      type: Array,
      default: [
        {
          name: 'width',
          value: 60,
          unit: StyleValueUnit.px,
        },
        {
          name: 'height',
          value: 40,
          unit: StyleValueUnit.px,
        },
        {
          name: 'backgroundColor',
          value: '#f00',
          unit: StyleValueUnit.none,
        }
      ],
    }
  },
  computed: {
    curStyle() {
      return convertSchemaToStyle(this.style);
    }
  }
});

export default ContainerWidget;

</script>

<style scoped></style>
