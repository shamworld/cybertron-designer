<template>
  <component :is="rootTag" v-bind="rootProps" v-on="rootListeners" :class="clazz" :style="style">
    <template v-if="dropIn && dropAllowed">
      <template v-if="reordering">
        <template v-if="hasReorderingFeedback">
          <slot v-for="item in itemsBeforeReorderingFeedback" :item="item" name="item"/>
          <slot :item="items[fromIndex]" name="reordering-feedback"/>
          <slot v-for="item in itemsAfterReorderingFeedback" :item="item" name="item"/>
        </template>
        <template v-else>
          <slot v-for="(item, index) in reorderedItems" :item="item" :reorder="index === closestIndex"
                name="item"/>
        </template>
      </template>
      <template v-else>
        <slot v-for="item in itemsBeforeFeedback" :item="item" :reorder="false" name="item"/>
        <slot :data="dragData" :type="dragType" name="feedback"/>
        <slot v-for="item in itemsAfterFeedback" :item="item" :reorder="false" name="item"/>
      </template>
    </template>
    <template v-else>
      <slot v-for="item in items" :item="item" :reorder="false" name="item"/>
    </template>
    <drag-feedback v-if="showDragFeedback" key="drag-feedback" ref="feedback" class="__feedback">
      <slot :data="dragData" :type="dragType" name="feedback"/>
    </drag-feedback>
    <div v-if="showInsertingDragImage" key="inserting-drag-image" ref="drag-image" class="__drag-image">
      <slot :data="dragData" :type="dragType" name="drag-image"/>
    </div>
    <div v-if="showReorderingDragImage" key="reordering-drag-image" ref="drag-image" class="__drag-image">
      <slot :item="items[fromIndex]" name="reordering-drag-image"/>
    </div>
    <div key="drop-list-content">
      <slot/>
    </div>
  </component>
</template>

<script lang="ts">
import {Options, Prop} from 'vue-property-decorator';
import DropMixin from '../mixins/DropMixin';
import DragFeedback from './DragFeedback.vue';
import Grid from '../ts/Grid';
import {DnDEvent, InsertEvent, ReorderEvent} from '../ts/events';
import {createDragImage} from '../ts/createDragImage';
import {dnd} from '../ts/DnD';

@Options({
  components: {DragFeedback},
  inheritAttrs: false
})
export default class DropList extends DropMixin {

  @Prop({default: 'div', type: [String, Object, Function]})
  tag: any;

  @Prop()
  items: any[];

  @Prop({default: null})
  row: boolean;

  @Prop({default: null, type: Boolean})
  column: boolean;

  @Prop({default: false, type: Boolean})
  noAnimations: boolean;

  grid: Grid = null;
  forbiddenKeys = [];
  feedbackKey = null;
  fromIndex: number = null;

  get rootTag() {
    if (this.noAnimations) {
      return this.tag ? this.tag : 'div';
    } else {
      return 'transition-group';
    }
  }

  get rootProps() {
    if (this.noAnimations) {
      return this.$attrs;
    } else {
      return {
        tag: this.tag,
        duration: {enter: 0, leave: 0},
        css: false
      };
    }
  }

  get rootListeners() {
    if (this.noAnimations) {
      debugger;
      // return this.$listeners;
      return this.$attrs;
    } else {
      return {};
    }
  }

  get direction() {
    if (this.row) return 'row';
    if (this.column) return 'column';
    return 'auto';
  }

  get reordering() {
    if (dnd.inProgress) {
      debugger;
      return dnd.source.$el.parentElement === this.$el && this.$listeners.hasOwnProperty('reorder');
    } else {
      return null;
    }
  }

  get closestIndex() {
    if (this.grid) {
      return this.grid.closestIndex(dnd.position);
    } else {
      return null;
    }
  }

  get dropAllowed() {
    if (this.dragInProgress) {
      if (this.reordering) {
        return this.items.length > 1;
      } else {
        let superDropAllowed = DropMixin['options'].computed.dropAllowed.get.call(this);
        if (!superDropAllowed) {
          return false;
        } else {
          if (this.forbiddenKeys !== null && this.feedbackKey !== null) {
            return !this.forbiddenKeys.includes(this.feedbackKey);
          } else {
            return null;
          }
        }
      }
    } else {
      return null;
    }
  }

  get itemsBeforeFeedback() {
    if (this.closestIndex === 0) {
      return [];
    } else {
      return this.items.slice(0, this.closestIndex);
    }
  }

  get itemsAfterFeedback() {
    if (this.closestIndex === this.items.length) {
      return [];
    } else {
      return this.items.slice(this.closestIndex);
    }
  }

  get itemsBeforeReorderingFeedback() {
    if (this.closestIndex <= this.fromIndex) {
      return this.items.slice(0, this.closestIndex);
    } else {
      return this.items.slice(0, this.closestIndex + 1);
    }
  }

  get itemsAfterReorderingFeedback() {
    if (this.closestIndex <= this.fromIndex) {
      return this.items.slice(this.closestIndex);
    } else {
      return this.items.slice(this.closestIndex + 1);
    }
  }

  get reorderedItems() {
    let toIndex = this.closestIndex;
    let reordered = [...this.items];
    let temp = reordered[this.fromIndex];
    reordered.splice(this.fromIndex, 1);
    reordered.splice(toIndex, 0, temp);
    return reordered;
  }

  get clazz() {
    return {
      'drop-list': true,
      'reordering': this.reordering === true,
      'inserting': this.reordering === false,
      ...(this.reordering === false ? this.cssClasses : {'dnd-drop': true})
    };
  }

  get style() {
    return {
      ...(this.reordering === false ? this.cssStyle : {})
    };
  }

  get showDragFeedback() {
    return this.dragInProgress && this.typeAllowed && !this.reordering;
  }

  get showInsertingDragImage() {
    return this.dragInProgress && this.typeAllowed && !this.reordering && this.$slots.hasOwnProperty('drag-image');
  }

  get showReorderingDragImage() {
    return this.dragInProgress && this.reordering && this.$slots.hasOwnProperty('reordering-drag-image');
  }

  get hasReorderingFeedback() {
    return this.$slots.hasOwnProperty('reordering-feedback');
  }

  created() {
    dnd.on('dragstart', this.onDragStart);
    dnd.on('dragend', this.onDragEnd);
  }

  destroyed() {
    dnd.off('dragstart', this.onDragStart);
    dnd.off('dragend', this.onDragEnd);
  }

  onDragStart(event: DnDEvent) {
    if (this.candidate(dnd.type, dnd.data, dnd.source)) {
      if (this.reordering) {
        this.fromIndex = Array.prototype.indexOf.call(event.source.$el.parentElement.children, event.source.$el);
        this.grid = this.computeReorderingGrid();
      } else {
        this.$nextTick(() => {
          // Presence of feedback node in the DOM and of keys in the virtual DOM required => delayed until what
          // depends on drag data has been processed.
          this.grid = this.computeInsertingGrid();
          this.feedbackKey = this.computeFeedbackKey();
          this.forbiddenKeys = this.computeForbiddenKeys();
        });
      }
    }
  }

  onDragEnd() {
    this.fromIndex = null;
    this.feedbackKey = null;
    this.forbiddenKeys = null;
    this.grid = null;
  }

  doDrop(event: DnDEvent) {
    if (this.reordering) {
      if (this.fromIndex !== this.closestIndex) {
        this.$emit('reorder', new ReorderEvent(
            this.fromIndex,
            this.closestIndex
        ));
      }
    } else {
      DropMixin['options'].methods.doDrop.call(this, event);
      this.$emit('insert', new InsertEvent(
          event.type,
          event.data,
          this.closestIndex
      ));
    }
  }

  candidate(type, data, source): boolean {
    let superCandidate = DropMixin['options'].methods.candidate.call(this, ...arguments);
    debugger;
    return (superCandidate && (this.$listeners.hasOwnProperty('insert') || this.$listeners.hasOwnProperty('drop'))) || this.reordering;
  }

  computeForbiddenKeys() {
    let vnodes = this.noAnimations ? [] : this.$children[0].$vnode.context.$children[0].$slots.default;
    return vnodes
        .map(vn => vn.key)
        .filter(k => k !== undefined && k !== 'drag-image' && k !== 'drag-feedback');
  }

  computeFeedbackKey() {
    return this.$refs['feedback']['$slots']['default'][0]['key'];
  }

  computeInsertingGrid() {
    let feedbackParent = this.$refs['feedback']['$el'] as HTMLElement;
    let feedback = feedbackParent.children[0];
    let clone = feedback.cloneNode(true) as HTMLElement;
    let tg = this.$el as HTMLElement;
    if (tg.children.length > this.items.length) {
      tg.insertBefore(clone, tg.children[this.items.length]);
    } else {
      tg.appendChild(clone);
    }
    let grid = new Grid(tg.children, this.items.length, this.direction, null);
    tg.removeChild(clone);
    return grid;
  }

  computeReorderingGrid() {
    let tg = this.$el as HTMLElement;
    return new Grid(tg.children, this.items.length - 1, this.direction, this.fromIndex);
  }

  createDragImage() {
    let image;
    if (this.$refs['drag-image']) {
      let el = this.$refs['drag-image'] as HTMLElement;
      let model;
      if (el.childElementCount !== 1) {
        model = el;
      } else {
        model = el.children.item(0);
      }
      let clone = model.cloneNode(true) as HTMLElement;
      let tg = this.$el as HTMLElement;
      tg.appendChild(clone);
      image = createDragImage(clone);
      tg.removeChild(clone);
      image['__opacity'] = this.dragImageOpacity;
    } else {
      image = 'source';
    }
    return image;
  }

  mounted() {
    console.log('drop list: ', this);
  }

}
</script>

<style scoped lang="less">
.drop-list {
  &::v-deep > * {
    transition: transform .2s;
  }
}

.__feedback {
  display: none;
}

/* Places a drag image out of sight while keeping its computed styles accessibles. */
.__drag-image {
  position: fixed;
  top: -10000px;
  left: -10000px;
  will-change: left, top;
}

.drop-list:not(.drop-in) {
  &::v-deep .drag-source {
    // transition: none !important;
  }
}
</style>

<style lang="less">
.drop-allowed.drop-in * {
  cursor: inherit !important;
}

.drop-forbidden.drop-in {
  &, * {
    cursor: no-drop !important;
  }
}
</style>
