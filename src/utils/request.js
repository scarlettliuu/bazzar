import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

const httpRequest = axios.create({
  baseURL: 'http://localhost:8081/api',
  timeout: 5000
})

// request interceptor
httpRequest.interceptors.request.use(
  config => {
    // do something before request is sent
    // each request carry token with custom defined header 'Authorization'
    if (store.getters.getToken) {
      config.headers['Authorization'] = store.getters.getToken
    }
    return config
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)

// response interceptor
httpRequest.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error'
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  err => {
    console.log('err' + err)
    Message({
      message: err.message,
      type: 'error'
    })
    return Promise.reject(err)
  }
)
export default httpRequest
