<template>
  <draggable class="border-border" :style="schema.props.style" :list="data" group="component" item-key="id" @change="onchange">
    <template #item="{ element }">
        <component class="dark:bg-white" :is="element.type">{{ element }}</component>
    </template>
  </draggable>
  <!--  <CustomClone></CustomClone>-->
</template>

<script>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import ContainerWidget from '@/views/design/components/widgets/container.vue';
import ImgWidget from './widgets/image.vue';
import InputWidget from './widgets/input.vue';
import TextWidget from './widgets/text.vue';
import ListWidget from './widgets/list.vue';

export default {
  name: 'canvas',
  components: {
    draggable,
    container: ContainerWidget,
    image: ImgWidget,
    txt: TextWidget,
    input: InputWidget,
    list: ListWidget
    // CustomClone
  },
  props: {
    schema: Object
  },
  methods: {
    onchange(data) {
      console.log('data: ', data);
      console.log(this.schema);
    }
  },
  data() {
    return {
      data: ref(this.schema.children)
    };
  }
};
</script>

<style scoped></style>
