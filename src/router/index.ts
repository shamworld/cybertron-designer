import Design from "@/views/design";
import Home from "@/views/home";
import NotFound from "@/views/not-found";
import Layout from '@/views/layout'
import { ReactNode } from "react";

interface RouteConfig {
  path: string;
  name: string;
  redirect?: string;
  component?: ReactNode;
}

export const routeConfig: RouteConfig[] = [
  {
    path: '/',
    name: '首页',
    redirect: '/home'
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
