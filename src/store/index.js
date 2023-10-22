import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用于保存登录的用户的信息,window.SessionStorage.get(MEMBER),{}是为了避免member为空
    //如果直接写成member:{}，由于member是保存在运行内存中的，则每次浏览器刷新时运行内存中的member就会被刷新，从而刷新后获取不了用户信息
    showWhich:{
      "showHot":0
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
