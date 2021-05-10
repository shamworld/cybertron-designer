<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="边框">

    </a-collapse-panel>
  </a-collapse>
</template>

<script>
export default {
  name: 'border-setting',
  data() {
    return {
      activeKey: '1',
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
