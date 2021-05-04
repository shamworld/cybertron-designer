import { createStore } from 'vuex';

const store = createStore({
  state: {
    schema: {}
  },
  mutations: {
    insertWidget(state) {
      console.log('add works');
    },
    updateWidget(state) {},
    deleteWidget(state) {
      console.log('delete widget: ', state);
    },
    moveWidget(state) {
      this.deleteWidget(state);
      this.insertWidget(state);
    }
  }
});
