import Home from '@/components/Home.vue';
import DesignBase from '@/components/design/base.vue';
import ManagementBase from '@/components/management/base.vue';
import ColorSpecification from '@/components/color-specification.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/', name: 'Index', redirect: '/home',
  },
  {
    path: '/home', name: 'Home', component: Home,
  },
  {
    path: '/design', name: 'Design', component: DesignBase,
  },
  {
    path: '/management', name: 'Management', component: ManagementBase, children: [],
  },
  {
    path: '/color-specification', name: 'ColorSpecification', component: ColorSpecification,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
