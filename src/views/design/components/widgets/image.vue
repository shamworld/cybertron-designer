<template>
  <img :src="url" :alt="alt"/>
</template>

<script>
import {defineComponent} from 'vue';

const ImgWidget = defineComponent({
  name: 'imageWidget',
  props: {
    url: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    style: {

    }
  }
});

export default ImgWidget;

</script>

<style scoped>

</style>
