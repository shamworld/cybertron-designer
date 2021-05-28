<template>
  <a-form :label-col="labelCol" :model="dataSourceList" :wrapper-col="wrapperCol">
    <a-form-item label="数据源">
      <div class="flex flex-shrink-0">
        <a-select v-model:value="dataSource">
          <a-select-option v-for="item in dataSourceList" :value="item">{{ item.name }}</a-select-option>
        </a-select>
      </div>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import DynamicObject from '@/interface/dynamic-object';
import { defineComponent, PropType } from 'vue';
import DataSourceSchema from '@/interface/schema/data-source.schema';

export default defineComponent({
  name: 'list',
  props: {
    dataSource: {
      type: Array as PropType<DataSourceSchema[]>,
      required: true,
    },
    dataSourceList: {
      type: Array as PropType<DataSourceSchema[]>,
      required: true
    }
  },
  setup() {
    return {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 12
      }
    };
  }
});
</script>

<style scoped></style>
