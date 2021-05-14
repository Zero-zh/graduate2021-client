import request from '@/utils/request'
//你问我答查询
export function getAskAndAnswerData({ currentPage, type, content }) {
    return request({
        url: '/qAndAForum/getAskAndAnswerData',
        method: 'get',
        params: { currentPage, type, content }
    })
}

//你问我答新增
export function addAskQuestion({ type, title, remarks, desc }) {
    return request({
        url: '/qAndAForum/addAskQuestion',
        method: 'post',
        params: { type, title, remarks, desc }
    })
}

//你问我答删除
export function deleteAskQuestion({ questionId }) {
    return request({
        url: '/qAndAForum/deleteAskQuestion',
        method: 'delete',
        params: { questionId }
    })
}

//你问我答更新
export function updateAskQuestion({ id, type, title, remarks, desc }) {
    return request({
        url: '/qAndAForum/updateAskQuestion',
        method: 'put',
        params: { id, type, title, remarks, desc }
    })
}

//经验之谈查询
export function getWorkExperience({ type, content }) {
    return request({
        url: '/qAndAForum/getWorkExperience',
        method: 'get',
        params: { type, content }
    })
}

