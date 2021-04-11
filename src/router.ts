import Home from '@/components/Home.vue';
import DesignBase from '@/components/design/base.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/', name: 'Index', redirect: '/home',
    }, {
        path: '/home', name: 'Home', component: Home,
    }, {
        path: '/design', name: 'Design', component: DesignBase,
    },
];

const router = createRouter({
                                history: createWebHistory(),
                                routes,
                            });

export default router;
