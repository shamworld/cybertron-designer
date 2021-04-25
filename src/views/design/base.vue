<template>
  <tool-bar></tool-bar>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import ToolBar from './tool-bar.vue'
import { GlobalDataProps } from '../../store'

export default {
  name: 'base',
  components: {
    'tool-bar': ToolBar
  },
  props: {},
  setup() {
    const store = useStore<GlobalDataProps>()
    const data = store.state.editor
    console.log(data)

    return {
      msg: '测试信息1'
    }
  },
  data() {
    return {
      msg: '基础信息'
    }
  }
}
</script>

<style lang="less" scoped></style>
