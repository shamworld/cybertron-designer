<template>
  <a-collapse :activeKey(v-model)="activeKey">
    <a-collapse-panel key="1" header="盒模型">
      <a-form :label-col="labelCol" :model="boxModelStyle" :wrapper-col="wrapperCol">
        <a-form-item label="宽度">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.width.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.width.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="高度">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.height.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.height.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="上外边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.marginTop.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.marginTop.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="下外边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.marginBottom.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.marginBottom.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="左外边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.marginLeft.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.marginLeft.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="右外边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.marginRight.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.marginRight.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="上内边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.paddingTop.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.paddingTop.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="下内边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.paddingBottom.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.paddingBottom.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="左内边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.paddingLeft.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.paddingLeft.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="右内边距">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.paddingRight.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.paddingRight.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="最小高度">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.minWidth.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.minWidth.unit }}</span>
          </div>
        </a-form-item>
        <a-form-item label="最大高度">
          <div class="flex flex-shrink-0">
            <a-input v-model:value="boxModelStyle.minHeight.value"></a-input>
            <span class="mx-10"> {{ boxModelStyle.minHeight.unit }}</span>
          </div>
        </a-form-item>
      </a-form>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import StyleValueUnit from '@/enum/style-value-unit';

export default {
  name: 'box-model-setting',
  data() {
    return {
      activeKey: '1',
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 12
      },
      boxModelStyle: {
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
