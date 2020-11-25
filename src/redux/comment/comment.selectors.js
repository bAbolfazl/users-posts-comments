import { createSelector } from 'reselect'

const selectComment = state => state.comment

export const selectCommentList = createSelector(
    selectComment,
    comment => comment.comments
)