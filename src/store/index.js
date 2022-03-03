import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import { resetRouter } from '@/router'
import { login, logout } from '../api/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      token: null,
      id: null,
      username: null
    }
  },
  getters: {
    getToken: (state) => {
      return state.token ? state.token : Cookies.get('token')
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_NAME: (state, username) => {
      state.username = username
    },
    RESET_STATE: (state) => {
      state.token = null
      state.id = null
      state.username = null
    }
  },
  actions: {
    login ({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        // axios.post('http://localhost:8081/login', { username: username.trim(), password: password }).then(res => {
        // axios.post({ username: username.trim(), password: password }).then(res => {
        login({ username: username.trim(), password: password }).then(res => {
          const { data } = res
          console.log(res)
          commit('SET_TOKEN', data.token)
          commit('SET_ID', data.id)
          commit('SET_NAME', data.username)
          Cookies.set('token', data.token)
          // axios.defaults.headers.common['Authorization'] = data.token
          resolve(res)
        }).catch(err => {
          Cookies.remove('token')
          reject(err)
        })
      })
    },
    logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        console.log('logout')
        // axios.post('http://localhost:8081/logout', state.id).then(res => {
        logout(state.id).then(res => {
          Cookies.remove('token')
          resetRouter()
          commit('RESET_STATE')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
})

export default store
