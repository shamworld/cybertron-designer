<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="尺寸与盒模型">

    </a-collapse-panel>
  </a-collapse>
</template>

<script>
export default {
  name: 'box-model',
  data() {
    return {
      activeKey: '1',
      style: {
        marginTop: {
          type: Number,
          default: 0
        },
        marginRight: {
          type: Number,
          default: 0,
        },
        marginBottom: {
          type: Number,
          default: 0
        },
        marginLeft: {
          type: Number,
          default: 0
        },
        paddingTop: {
          type: Number,
          default: 0
        },
        paddingRight: {
          type: Number,
          default: 0
        },
        paddingBottom: {
          type: Number,
          default: 0
        },
        paddingLeft: {
          type: Number,
          default: 0
        },
        width: {
          type: Number | String,
          default: 'auto'
        },
        height: {
          type: Number | String,
          default: 'auto'
        },
      }
    }
  }
};
</script>

<style scoped>

</style>
