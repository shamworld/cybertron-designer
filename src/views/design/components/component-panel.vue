<template>
  <a-tabs class="component-tabs" v-model:activeKey="activeKey" :hideAdd="true" :tabBarStyle="{ color: '#a9a8b8' }" :tabBarGutter="0">
    <a-tab-pane class="flex flex-wrap p-10" v-for="list in data" :key="list.type" :tab="list.typeName">
      <div class="flex flex-col align-middle m-10" v-for="item in list.list" :key="item.id">
        <component class="icon" :is="item.icon" style="color: #a3a8b8"></component>
        <span class="dark:text-text">{{ item.name }}</span>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import mockComponentList from '../../../mock/component-list';
import { BuildOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'component-panel',
  components: {
    BuildOutlined
  },
  props: {},
  setup: () => {
    return {
      data: ref(mockComponentList),
      activeKey: ref(1)
    };
  }
});
</script>

<style scoped lang="less">
.icon :deep(svg) {
  color: "#a3a8b8";
  width: 40px;
  height: 40px;
}
.component-tabs :deep(.ant-tabs-top-bar) {
  margin: 0;
}
</style>
