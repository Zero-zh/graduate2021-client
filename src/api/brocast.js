import request from '@/utils/request'

export function getEpidemicInfo(token) {
    return request({
        url: '/broadcast/getEpidemicInfo',
        method: 'get',
        params: { token }
    })
}

export function getEpidemicNews(token) {
    return request({
        url: '/broadcast/getEpidemicNews',
        method: 'get',
        params: { token }
    })
}