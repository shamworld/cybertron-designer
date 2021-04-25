import { createStore } from 'vuex'
import user, { UserProps } from './user'
import editor, { EditorProps } from './editor'

export interface GlobalDataProps {
  editor: EditorProps
  user: UserProps
}

export default createStore({
  modules: {
    user,
    editor
  }
})
