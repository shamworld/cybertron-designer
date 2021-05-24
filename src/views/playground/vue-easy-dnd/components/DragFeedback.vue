<template>
    <div class="DragFeedback">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-property-decorator";

    @Options({})
    export default class DragFeedback extends Vue {
      constructor() {
        super({}, {});
      }
    }
</script>

<style scoped lang="less">

</style>
