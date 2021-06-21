import Design from "@/views/design";
import Home from "@/views/home";
import NotFound from "@/views/not-found";
import Layout from '@/views/layout'
import {RouteProps} from 'react-router-dom'

interface RouteConfig extends RouteProps{
  name: string;
}

export const routeConfig: RouteConfig[] = [
  {
    path: '/',
    name: '首页',
    component: Layout,
  },

  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/design',
    name: '设计',
    component: Design
  },
  {
    path: '*',
    name: '未知',
    component: NotFound,
  }
];
