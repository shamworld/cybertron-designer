<template>
  <div class="generic" data-type="generic">
    <component :is="comp" v-bind="props" class="inner debugger"></component>
    <slot/>
  </div>
</template>

<script>
import Row from "./Row.vue";
import Column from "./Column.vue";
import Atomic from "./Atomic.vue";

export default {
  name: "Generic",
  props: {
    model: null
  },
  mounted() {
    console.log('props: ', this.props);
  },
  computed: {
    comp() {
      if (typeof this.model === "object") {
        if (this.model.type === "row") {
          return Row;
        } else {
          return Column;
        }
      } else {
        return Atomic;
      }
    },
    props() {
      if (typeof this.model === "object") {
        return {
          items: this.model.items
        };
      } else {
        return {
          data: this.model
        };
      }
    }
  }
};
</script>

<style scoped>
.generic {
  flex: 1;
  display: flex;
  align-items: stretch;
  margin: 20px;
}

.inner {
  width: 100%;
  height: 100%;
}
</style>
