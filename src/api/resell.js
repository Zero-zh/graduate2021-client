import request from '@/utils/request'
//当面交易查询
export function getResellData(token) {
    return request({
        url: '/resell/getResellData',
        method: 'get',
        params: { token }
    })
}

