<template>
  <div class="w-60 h-40 border-dashed" :style="curStyle"></div>
</template>

<script>
import {defineComponent} from 'vue';
import StyleValueUnit from '@/enum/style-value-unit';

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
      const styleRaw = this.style;
      return styleRaw.reduce((accumulator, curVal) => {
        accumulator[curVal.name] = `${curVal.value}${curVal.unit}`;
        return accumulator;
      }, {});
    }
  }
});

export default ContainerWidget;

</script>

<style scoped></style>
