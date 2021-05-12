<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="边框">
      <a-form :label-col="labelCol" :model="layoutStyle" :wrapper-col="wrapperCol">
        <a-form-item label="上边框">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.borderTop.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.borderTop.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="下边框">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.borderBottom.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.borderBottom.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="左边框">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.borderLeft.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.borderLeft.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="右边框">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.borderRight.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.borderRight.unit }}</span>
          </div>
        </a-form-item>
      </a-form>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import StyleValueUnit from '@/enum/style-value-unit';

export default {
  name: 'border-setting',
  data() {
    return {
      activeKey: '1',
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 12
      },
      layoutStyle: {
        borderTop: {
          type: String,
          value: 0,
          unit: StyleValueUnit.px
        },
        borderRight: {
          type: String,
          value: 0,
          unit: StyleValueUnit.px,
        },
        borderBottom: {
          type: String,
          value: 0,
          unit: StyleValueUnit.px
        },
        borderLeft: {
          type: String,
          value: 0,
          unit: StyleValueUnit.px
        },
      }
    }
  }
};
</script>

<style scoped>

</style>
