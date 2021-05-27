<template>
  <list-form :dataSourceList="data">props setting works!</list-form>
</template>

<script>
import ListForm from '@/views/design/components/prop-forms/list-form.vue';
import {ref} from 'vue';
import ValueType from '@/enum/value-type';

export default {
  name: 'props-setting',
  components: {
    ListForm,
  },
  setup() {
    // TODO 这里开发了一半，还没有写完
    const data = ref([
      {
        name: 'test1',
        type: ValueType.object,
        example: {
          name: '上海',
          id: '0',
        },
        fields: [
          {
            name: 'name',
            type: ValueType.string,
            example: '上海',
            fields: [],
          },
          {
            name: 'id',
            type: ValueType.string,
            example: '0',
            fields: [],
          }
        ]
      }
    ] as DataSourceSchema[]);
    return {
      data,
    };
  }
};
</script>

<style scoped>

</style>
