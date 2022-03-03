import httpRequest from '../utils/request'

export function login (data) {
  return httpRequest({
    url: '/ubs/user/login',
    method: 'post',
    data
  })
}

export function logout (data) {
  return httpRequest({
    url: 'ubs/user/logout',
    method: 'post'
  })
}

export function getUserInfo (data) {
  return httpRequest({
    url: 'ubs/home/userinfo',
    method: 'get',
    data: {}
  })
}
