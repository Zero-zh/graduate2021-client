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

//获取个人中心用户信息
export function getSysUserInfo(token) {
  return request({
    url: '/sys/user/info',
    method: 'get',
    params: { token }
  })
}

//更改昵称
export function changePassword({ beforePassword, afterPassword, confirmedPassword }) {
  return request({
    url: '/sys/user/changePassword',
    method: 'get',
    params: { beforePassword, afterPassword, confirmedPassword }
  })
}

//更改密码
export function changeUserName({ userName }) {
  return request({
    url: '/sys/user/changeUserName',
    method: 'post',
    params: { userName }
  })
}


//游客登录
export function touristLogin(data) {
  return request({
    url: '/sys/touristLogin',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/sys/logout',
    method: 'post'
  })
}
