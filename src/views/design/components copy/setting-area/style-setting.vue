<template>
  <template v-if="widgetType">
    <component :is="item.type" v-for="item in settingList" :style="schema.props.style"></component>
  </template>
  <div v-else>请选择组件</div>
</template>

<script>
import { getFormConfig } from '@/util';
import LayoutSetting from '@/views/design/components/style-forms/layout-setting.vue';
import PositionSetting from '@/views/design/components/style-forms/position-setting.vue';
import BoxModelSetting from '@/views/design/components/style-forms/box-model-setting.vue';
import FontSetting from '@/views/design/components/style-forms/font-setting.vue';
import BorderSetting from '@/views/design/components/style-forms/border-setting.vue';
import VisualEffectSetting from '@/views/design/components/style-forms/visual-effect-setting.vue';
import PageStyleSetting from '@/views/design/components/style-forms/page-style-setting.vue';

export default {
  name: 'style-setting',
  components: {
    LayoutSetting,
    BoxModelSetting,
    PositionSetting,
    FontSetting,
    BorderSetting,
    VisualEffectSetting,
    PageStyleSetting,
  },
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  computed: {
    widgetType() {
      return this.schema.type;
    },
    settingList() {
      return getFormConfig(this.widgetType);
    }
  }
};
</script>

<style scoped></style>
