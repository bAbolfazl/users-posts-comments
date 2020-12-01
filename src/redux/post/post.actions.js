import POST_ACTIONTYPES from './post.actionTypes'

export const fetchPostsStart = () => ({
    type: POST_ACTIONTYPES.FETCH_POSTS_START,
})

export const fetchPostsSuccess = (posts) => ({
    type: POST_ACTIONTYPES.FETCH_POSTS_SUCCESS,
    payload: posts
})

export const fetchPostsFailure = (error) => ({
    type: POST_ACTIONTYPES.FETCH_POSTS_FAILURE,
    payload: error
})

export const fetchPostsAsync = () => (
    dispatch => {
        dispatch(fetchPostsStart())

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => dispatch(fetchPostsSuccess(res)))
            .catch(err => dispatch(fetchPostsFailure(err.message)))
    }
)