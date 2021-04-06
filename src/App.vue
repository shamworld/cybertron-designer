<script lang="ts">
import { h } from 'vue'
import HelloWorld from './components/HelloWorld.vue';
import Home from './components/Home.vue';

const routes = {
  '/': HelloWorld,
  '/home': Home,
};

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}
export default SimpleRouter;
</script>

<style>

</style>
