<template>
  <p :style="curStyle">{{ schema.props.data }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { convertSchemaToStyle } from '@/util';

const TextWidget = defineComponent({
  name: 'text-widget',
  props: {
    schema: {
      type: Object,
      required: true,
      default: {},
    }
  },
  computed: {
    curStyle() {
      return convertSchemaToStyle(this.schema.props.style);
    }
  }
});
export default TextWidget;
</script>

<style scoped></style>
