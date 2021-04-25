import { Module } from 'vuex'
import { GlobalDataProps } from './index'

export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: []
  // 当前编辑的是哪个元素，uuid
  currentElement: string
  // todo
}

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: [],
    currentElement: ''
  },
  mutations: {
    addComponent(state) {},
    removeComponent(state) {},
    updateComponent(state) {},
    setActive(state) {}
  },
  getters: {}
}

export default editor
