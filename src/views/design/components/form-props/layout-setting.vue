<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="布局">
      <a-form :label-col="labelCol" :model="layoutStyle" :wrapper-col="wrapperCol">
        <a-form-item label="宽度">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.width.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.width.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="高度">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.height.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.height.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="上外边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.marginTop.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.marginTop.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="下外边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.marginBottom.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.marginBottom.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="左外边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.marginLeft.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.marginLeft.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="右外边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.marginRight.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.marginRight.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="上内边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.paddingTop.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.paddingTop.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="下内边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.paddingBottom.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.paddingBottom.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="左内边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.paddingLeft.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.paddingLeft.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="右内边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.paddingRight.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.paddingRight.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="最小高度">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.minWidth.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.minWidth.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="最大高度">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="layoutStyle.minHeight.value"></a-input>
            <span class="mx-10"> {{ layoutStyle.minHeight.unit }}</span>
          </div>
        </a-form-item>
      </a-form>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import StyleValueUnit from '@/enum/style-value-unit';

export default {
  name: 'layout-setting',
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
        marginTop: {
          type: Number,
          value: 0,
          unit: StyleValueUnit.px
        },
        marginRight: {
          type: Number,
          value: 0,
          unit: StyleValueUnit.px
        },
        marginBottom: {
          type: Number,
          value: 0,
          unit: StyleValueUnit.px
        },
        marginLeft: {
          type: Number,
          value: 0,
          unit: StyleValueUnit.px
        },
        paddingTop: {
          type: Number,
          value: 0,
          unit: StyleValueUnit.px
        },
        paddingRight: {
          type: Number,
          value: 0,
          unit: StyleValueUnit.px
        },
        paddingBottom: {
          type: Number,
          value: 0,
          unit: StyleValueUnit.px
        },
        paddingLeft: {
          type: Number,
          value: 0,
          unit: StyleValueUnit.px
        },
        width: {
          type: Number | String,
          value: 'auto',
          unit: StyleValueUnit.px
        },
        height: {
          type: Number | String,
          value: 'auto',
          unit: StyleValueUnit.px
        },
        minWidth: {
          type: Number | String,
          value: 'auto',
          unit: StyleValueUnit.px
        },
        minHeight: {
          type: Number | String,
          value: 'auto',
          unit: StyleValueUnit.px
        }
      }
    };
  }
};
</script>

<style scoped></style>
