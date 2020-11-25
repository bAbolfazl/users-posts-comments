import POST_ACTIONTYPES from './post.actionTypes'

const INITIAL_STATE = {
    posts: [],
}

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_ACTIONTYPES.SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        default:
            return { ...state }
    }
}

export default postsReducer