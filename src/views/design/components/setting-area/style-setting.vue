<template>
  {{ widgetType }}
  <component v-if="widgetType" :is="widgetType"></component>
  <div>请选择组件</div>
</template>

<script>
export default {
  name: 'style-setting',
  props: {
    widgetType: {
      type: String,
      default: ''
    },
  }
};
</script>

<style scoped>

</style>
