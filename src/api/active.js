import request from '@/utils/request'
export function getComprehensiveUpData(token) {
    return request({
        url: '/activity/getComprehensiveUpData',
        method: 'get',
        params: { token }
    })
}
export function getComprehensiveDownData(token) {
    return request({
        url: '/activity/getComprehensiveDownData',
        method: 'get',
        params: { token }
    })
}

//竞赛专区信息查询
export function getCompetitionData(token) {
    return request({
        url: '/activity/getCompetitionData',
        method: 'get',
        params: { token }
    })
}

