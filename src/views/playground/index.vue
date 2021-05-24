<template>
  <div>playground works</div>
  <drop-list
    :items="items"
    class="list"
    @insert="onInsert"
    @reorder="$event.apply(items)"
  >

  </drop-list>
</template>

<script>
import Generic from './components/Generic.vue';
import {Drag, DropList} from '@/views/playground/vue-easy-dnd';

export default {
  name: 'App',
  components: {
    Generic,
    Drag,
    DropList
  },
  data: function() {
    return {
      items : ['a', 'b', 'c', 'd', 'e']
    }
  },
  methods: {
    onInsert(event) {
      this.items.splice(event.index, 0, event.data);
    }
  }
};
</script>

<style scoped>
.root {
  width: 800px;
  padding: 50px;
}
</style>

<style>
* {
  box-sizing: border-box;
}
</style>
