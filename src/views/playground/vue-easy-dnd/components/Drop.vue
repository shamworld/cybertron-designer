<template>
  <component :is="tag" v-bind="$attrs" :class="cssClasses" :style="cssStyle">
    <slot></slot>
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot v-bind="scope" :name="slot"/>
    </template>
    <div v-if="showDragImage" ref="drag-image" class="__drag-image">
      <slot :data="dragData" :type="dragType" name="drag-image"></slot>
    </div>
  </component>
</template>

<script lang="ts">
import {Options, Prop} from 'vue-property-decorator';
import DropMixin from '../mixins/DropMixin';

@Options({})
export default class Drop extends DropMixin {

  @Prop({default: 'div', type: [String, Object, Function]})
  tag: any;

  get showDragImage() {
    return this.dragInProgress && this.typeAllowed && this.$slots['drag-image'];
  }

}
</script>

<style lang="less">
.drop-allowed.drop-in {
  &, * {
    cursor: pointer !important;
  }
}

.drop-forbidden.drop-in {
  &, * {
    cursor: no-drop !important;
  }
}
</style>

<style lang="less" scoped>
/* Places a drag image out of sight while keeping its computed styles accessibles. */
.__drag-image {
  position: fixed;
  top: -10000px;
  left: -10000px;
  will-change: left, top;
}
</style>
