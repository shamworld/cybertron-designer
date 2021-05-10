<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="定位">

    </a-collapse-panel>
  </a-collapse>
</template>

<script>
export default {
  name: 'position-setting',
  data() {
    return {
      activeKey: '1',
    }
  }
};
</script>

<style scoped>

</style>
