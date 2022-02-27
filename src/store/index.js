import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      token: Cookies.get('token')
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    login ({commit}, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8081/login', { username: username.trim(), password: password }).then(res => {
        // axios.post({ username: username.trim(), password: password }).then(res => {
          const { data } = res
          commit('SET_TOKEN', data.token)
          Cookies.set('token', data.token)
          axios.defaults.headers.common['Authorization'] = data.token
          resolve(res)
        }).catch(err => {
          Cookies.remove('token')
          reject(err)
        })
      })
    }
  }
})

export default store
