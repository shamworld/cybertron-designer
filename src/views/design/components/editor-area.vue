<template>
  <div class="w-375 h-812 dark:border border dark:border-border mx-auto my-20 box-content">
    <container :schema="schema"></container>
  </div>
</template>

<script>
import ContainerWidget from '@/views/design/components/widgets/container.vue';

export default {
  name: "editor-area",
  components: {
    container: ContainerWidget,
  },
  props: {
    schema: {
      type: Object,
      required: true,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
