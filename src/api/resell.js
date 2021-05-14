import request from '@/utils/request'
//当面交易查询
export function getResellData(priceMin, priceMax, content) {
    return request({
        url: '/resell/getResellData',
        method: 'get',
        params: { priceMin, priceMax, content }
    })
}

//条件查询
export function selectByCondition({ priceMin, priceMax, content }) {
    return request({
        url: '/resell/selectByCondition',
        method: 'post',
        params: { priceMin, priceMax, content }
    })
}

