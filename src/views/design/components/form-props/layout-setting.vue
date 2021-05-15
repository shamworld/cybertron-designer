<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="定位">
      <a-form :label-col="labelCol" :model="style" :wrapper-col="wrapperCol">
        <a-form-item label="定位">
          <div class="flex flex-shrink-0">
            <a-select v-model:value="style.display.value">
              <a-select-option value="block">默认</a-select-option>
              <a-select-option value="flex">弹性布局</a-select-option>
            </a-select>
          </div>
        </a-form-item>
      </a-form>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import StyleValueUnit from '@/enum/style-value-unit';
import Layout from '@/enum/layout';

export default {
  name: 'layout-setting',
  props: {
    style: {
      type: Object,
      default: {
        display: {
          type: Layout,
          value: Layout.block,
          unit: StyleValueUnit.none
        }
      }
    }
  },
  beforeMount() {
    console.log(this.style);
  },
  data() {
    return {
      activeKey: '1',
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 12
      }
    };
  }
};
</script>

<style scoped></style>
