import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getinfoData(token) {
  return request({
    url: '/broadcast/getinfoData',
    method: 'get',
    params: { token }
  })
}

export function getRearchData(token) {
  return request({
    url: '/broadcast/getResearchData',
    method: 'get',
    params: { token }
  })
}

export function getHistoryData(token) {
  return request({
    url: '/broadcast/getHistoryData',
    method: 'get',
    params: { token }
  })
}


export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/sys/logout',
    method: 'post'
  })
}
