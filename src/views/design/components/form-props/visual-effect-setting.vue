<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="视觉效果">

    </a-collapse-panel>
  </a-collapse>
</template>

<script>
export default {
  name: 'visual-effect-setting',
  data() {
    return {
      activeKey: '1'
    }
  }
};
</script>

<style scoped>

</style>
