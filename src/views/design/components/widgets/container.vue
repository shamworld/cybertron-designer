<template>
  <draggable
    :list="data"
    :component-data="{style: curStyle}"
    group="component"
    item-key="id"
    @change="onchange"
  >
    <template #item="{ element }">
      <component :is="element.type" :schema="element" :props="element"/>
    </template>
  </draggable>
</template>

<script>
import {defineComponent, ref} from 'vue';
import StyleValueUnit from '@/enum/style-value-unit';
import {convertSchemaToStyle} from '@/util';
import draggable from 'vuedraggable';
import ImgWidget from './image.vue';
import TextWidget from './text.vue';
import ListWidget from './list.vue';

const ContainerWidget = defineComponent({
  name: 'container-widget',
  components: {
    draggable,
    ImgWidget,
    TextWidget,
    ListWidget
  },
  props: {
    schema: {
      type: Object,
      default: {},
      required: true
    },
    style: {
      type: Array,
      default: [
        {
          name: 'width',
          value: 60,
          unit: StyleValueUnit.px
        },
        {
          name: 'height',
          value: 40,
          unit: StyleValueUnit.px
        },
        {
          name: 'backgroundColor',
          value: '#f00',
          unit: StyleValueUnit.none
        }
      ]
    }
  },
  methods: {
    onchange(data) {
      console.log('data: ', data);
      console.log(this.schema);
    }
  },
  computed: {
    curStyle() {
      return convertSchemaToStyle(this.schema.props.style);
    }
  },
  data() {
    return {
      data: ref(this.schema.children)
    };
  }
});

export default ContainerWidget;
</script>

<style scoped lang="less">
  .selected {
    position: relative;
    :before {
      position: absolute;
      top: 0;
      left: 0;
      content: 'container';
      background-color: #396fff;
      color: #fff;
      font-size: 12px;
      transform: scale(.5);
    }
    :after {

    }
  }
</style>
