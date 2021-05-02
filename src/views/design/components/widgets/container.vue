<template>
  <div class="w-60 h-40 border-dashed"></div>
</template>

<script>
import StyleValueUnit from '../../../../enum/style-value-unit';

export default {
  name: 'container',
  props: {
    style: {
      type: Array,
      default: [
        {
          name: 'width',
          value: 60,
          unit: StyleValueUnit.px,
        },
        {
          name: 'height',
          value: 40,
          unit: StyleValueUnit.px,
        }
      ],
    }
  }
};
</script>

<style scoped></style>
