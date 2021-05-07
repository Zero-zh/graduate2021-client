import request from '@/utils/request'
//期末攻略
export function getEndExamData(token) {
    return request({
        url: '/examination/getEndExamData',
        method: 'get',
        params: { token }
    })
}

//国家证书
export function getCertificateData(token) {
    return request({
        url: '/examination/getCertificateData',
        method: 'get',
        params: { token }
    })
}

//国考备战查询
export function getNationalExamData(token) {
    return request({
        url: '/examination/getNationalExamData',
        method: 'get',
        params: { token }
    })
}
