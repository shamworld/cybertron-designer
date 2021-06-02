<template>
  <div>
    <component :is="componentIconName"></component>
    <span>{{ componentName }}</span>
  </div>
</template>

<script>
export default {
  name: 'component-item',
  props: {
    componentName: '',
    componentIconName: ''
  }
};
</script>

<style scoped></style>
