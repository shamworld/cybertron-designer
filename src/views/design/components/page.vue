<template>
  <div :class="{ selected }" @click.stop="selectWidget" :data-type="schema.type" :style="curStyle">
    <container-widget :schema="schema.props.widgetSchema"></container-widget>
  </div>
</template>

<script lang="ts">
import ContainerWidget from './widgets/container.vue';
import store from '@/store';
import {convertSchemaToStyle} from '@/util';
export default {
  name: 'page',
  components: {ContainerWidget},
  props: {
    schema: {
      type: Object,
      required: true,
    }
  },
  computed: {
    curStyle() {
      return convertSchemaToStyle(this.schema.props.style);
    },
    selected() {
      return store.state.selectedSchema.id === this.schema.id;
    }
  },
  methods: {
    selectWidget() {
      store.commit('selectWidget', this.schema);
    }
  }
};
</script>

<style lang="less">
@import 'src/style/mixin';

.selected {
  .selected();
  &:before {
    content: '页面';
  }
}
</style>
