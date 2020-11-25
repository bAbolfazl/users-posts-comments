import POST_ACTIONTYPES from './post.actionTypes'

export const setPosts = (posts) => ({
    type: POST_ACTIONTYPES.SET_POSTS,
    payload: posts
})

export const setCurrentPosts = posts => ({
    type: POST_ACTIONTYPES.SET_CURRENTPOSTS,
    payload: posts
})

