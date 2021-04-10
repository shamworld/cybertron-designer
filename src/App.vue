<script lang="ts">
import { h } from 'vue'
import  HelloWorld from '@/components/HelloWorld.vue';
import Home from './components/Home.vue';
import NotFoundComponent from './components/not-found.vue';
import DesignBase from '@/components/design/base.vue';
import Routes from './interface/Routes';

const routes: Routes = {
  '/': HelloWorld,
  '/home': Home,
  '/design': DesignBase,
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

<style scoped lang="less">

</style>
