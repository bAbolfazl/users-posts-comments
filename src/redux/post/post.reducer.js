import POST_ACTIONTYPES from './post.actionTypes'

const INITIAL_STATE = {
    posts: [],
    isFetching: false,
    errorMessage: undefined
}

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_ACTIONTYPES.FETCH_POSTS_START:
            return {
                ...state,
                isFetching: true
            }
        case POST_ACTIONTYPES.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.payload
            }
        case POST_ACTIONTYPES.FETCH_POSTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return { ...state }
    }
}

export default postsReducer