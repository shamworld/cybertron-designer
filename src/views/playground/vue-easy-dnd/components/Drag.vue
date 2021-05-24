<template>
    <component :is="tag" v-bind="$attrs"
               :class="cssClasses">
        <slot></slot>
        <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope"/>
        </template>
        <div class="__drag-image" ref="drag-image">
            <slot name="drag-image"></slot>
        </div>
    </component>
</template>

<script lang="ts">
import {Options, Prop} from "vue-property-decorator";
import DragMixin from "../mixins/DragMixin";

@Options({})
export default class Drag extends DragMixin {

    /**
     * Tag to be used as root of this component. Defaults to div.
     */
    @Prop({default: 'div', type: [String, Object, Function]})
    tag: any;

}
</script>

<style lang="less">
.drop-allowed.drop-in * {
  cursor: inherit !important;
}

.drop-forbidden.drop-in {
  &, * {
    cursor: no-drop !important;
  }
}

.drag-no-handle.drag-in {
  cursor: move;
  cursor: grab;
}
</style>

<style lang="less">
html.drag-in-progress * {
  cursor: move !important;
  cursor: grabbing !important;
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
