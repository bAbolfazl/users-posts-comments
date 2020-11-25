import COMMENT_ACTIONTYPES from './comment.actionTypes'

export const setComments = comments => ({
    type: COMMENT_ACTIONTYPES.SET_COMMENTS,
    payload: comments
})