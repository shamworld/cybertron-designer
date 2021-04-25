import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import router from '@/router'
import App from './App.vue'
import store from './store'

import 'ant-design-vue/dist/antd.css'
import './index.css'

createApp(App).use(store).use(router).use(Antd).mount('#app')
