import COMMENT_ACTIONTYPES from './comment.actionTypes'

export const FetchCommentStart = () => ({
    type: COMMENT_ACTIONTYPES.FETCH_COMMENTS_START,
})

export const FetchCommentSuccess = (comments) => ({
    type: COMMENT_ACTIONTYPES.FETCH_COMMENTS_SUCCESS,
    payload: comments
})

export const FetchCommentFailure = (error) => ({
    type: COMMENT_ACTIONTYPES.FETCH_COMMENTS_FAILURE,
    payload: error
})

export const FetchCommentAsync = () => (
    dispatch => {
        dispatch(FetchCommentStart)

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(res => dispatch(FetchCommentSuccess(res)))
            .catch(err => dispatch(FetchCommentFailure(err.message)))
    }
)