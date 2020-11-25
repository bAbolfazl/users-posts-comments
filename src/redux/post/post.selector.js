import { createSelector } from 'reselect'

const selectPost = state => state.post

export const selectPostList = createSelector(
    selectPost,
    post => post.posts
)

// export const selectPostsListByUser = (state, props) => createSelector(
//     [selectPostList],
//     posts => {
//         if (!posts) return
//         posts.filter(post => { return post.userId === props })
//     }
// )