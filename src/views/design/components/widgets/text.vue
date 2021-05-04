<template>
  <p>{{ data }}</p>
</template>

<script>
import {defineComponent} from 'vue';

const TextWidget = defineComponent({
  name: 'text',
  props: {
    data: String
  }
});
export default TextWidget;
</script>

<style scoped></style>
