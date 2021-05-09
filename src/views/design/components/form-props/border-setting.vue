<template>
  <a-collapse>
    <a-collapse-panel></a-collapse-panel>
  </a-collapse>
</template>

<script>
export default {
  name: 'border-setting',
  data() {
    return {
      style: {
        borderTop: {
          type: String,
          default: ''
        },
        borderRight: {
          type: String,
          default: '',
        },
        borderBottom: {
          type: String,
          default: ''
        },
        borderLeft: {
          type: String,
          default: ''
        },
      }
    }
  }
};
</script>

<style scoped>

</style>
