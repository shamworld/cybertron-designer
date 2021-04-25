import { Module } from 'vuex'
import { GlobalDataProps } from './index'

export interface UserProps {
  // 是否登陆
  isLogin: boolean
  // 用户信息
  userInfo: Object
  // todo
}

const user: Module<UserProps, GlobalDataProps> = {
  state: {
    isLogin: false,
    userInfo: {}
  },
  mutations: {
    login(state) {},
    logout(state) {},
    getUserInfo(state) {}
  },
  getters: {}
}

export default user
