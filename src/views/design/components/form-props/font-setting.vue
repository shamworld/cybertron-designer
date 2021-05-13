<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="字体">
      <a-form :label-col="labelCol" :model="fontStyle" :wrapper-col="wrapperCol">
        <a-form-item label="颜色">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="fontStyle.color.value"></a-input>
            <span class="mx-10"> {{ fontStyle.color.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="字号">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="fontStyle.fontSize.value"></a-input>
            <span class="mx-10"> {{ fontStyle.fontSize.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="行高">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="fontStyle.lineHeight.value"></a-input>
            <span class="mx-10"> {{ fontStyle.lineHeight.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="加粗">
          <div class="flex flex-shrink-0">
            <a-switch v-model:value="fontStyle.fontWeight.value"></a-switch>
          </div>
        </a-form-item>
        <a-form-item label="字体">
          <a-select v-model:value="fontStyle.fontFamily.value">
            <a-select-option value="Microsoft YaHei">微软雅黑</a-select-option>
            <a-select-option value="PingFangSC-Regular">苹方-简 常规</a-select-option>
            <a-select-option value="Helvetica">Helvetica</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import StyleValueUnit from '@/enum/style-value-unit';

export default {
  name: 'font-setting',
  data() {
    return {
      activeKey: '1',
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 12
      },
      fontStyle: {
        fontFamily: {
          type: String,
          value: 'Microsoft YaHei',
          unit: StyleValueUnit.none,
        },
        fontSize: {
          type: Number,
          value: 12,
          unit: StyleValueUnit.px
        },
        lineHeight: {
          type: Number,
          value: 12,
          unit: StyleValueUnit.px
        },
        color: {
          type: String,
          value: '#000',
          unit: StyleValueUnit.none
        },
        fontWeight: {
          type: Number,
          value: 400,
          unit: StyleValueUnit.px
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
